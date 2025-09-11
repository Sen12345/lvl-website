"use server";

import { prisma } from "@/db/prisma";
import { convertToPlainObject, formatError } from "../utils";
import { LATEST_BLOG_LIMIT, PAGE_SIZE } from "../constants";
import { revalidatePath } from "next/cache";
import { createBlogSchema, updateBlogSchema } from "../validations";
import z, { object, success } from "zod";
import { Prisma } from "@/generated/prisma";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { Blog } from "@/types";
import { auth } from "@/auth";

// Get latest products
export async function getLatestBlogs() {
  const data = await prisma.blog.findMany({
    take: LATEST_BLOG_LIMIT,
    orderBy: { createdAt: "desc" },
  });
  return convertToPlainObject(data);
}

//Get single product by its slug
export async function getBlogBySlug(slug: string) {
  return await prisma.blog.findFirst({ where: { slug: slug } });
}

// Get product by id

export async function getBlogById(blogId: string) {
  const data = await prisma.blog.findFirst({
    where: { id: blogId },
  });
  return convertToPlainObject(data);
}

// Get all products
export async function getAllBlogs() {
  const blogs = await prisma.blog.findMany();
  return blogs;
}

// Delete products
export async function deleteBlog(id: string) {
  try {
    const blogExist = await prisma.blog.findFirst({
      where: { id },
    });

    if (!blogExist) throw new Error("Blog not found");

    await prisma.blog.delete({ where: { id } });

    revalidatePath("/admin/blogs");

    return { success: true, message: "Blog deleted successfully" };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

export async function createBlog(formData: FormData) {
  const headline = formData.get("headline") as string;
  const slug = formData.get("slug") as string;
  const paragraph1 = formData.get("paragraph1") as string;
  const paragraph2 = formData.get("paragraph2") as string;
  const bloglinks = formData.get("bloglinks") as string;
  // const images = formData.getAll("images") as File[];
  const images = formData.get("images") as File;
  const session = await auth();

  if (images.name) {
    try {
      // Save file inside "uploads" folder in your project root
      const buffer = Buffer.from(await images.arrayBuffer());
      const filename = images.name.replaceAll(" ", "_");
      console.log(filename);

      await writeFile(
        path.join(process.cwd(), "public/blogUploads/" + filename),
        buffer
      );

      const blog = await prisma.blog.create({
        data: {
          headline,
          slug,
          paragraph1,
          paragraph2,
          bloglinks,
          images: [`/blogUploads/${images.name}`],
          user: {
            connect: { id: session?.user.id },
          },
        },
      });

      revalidatePath("/"); // refresh UI

      return {
        success: true,
        message: "Blog submitted successfully",
      };
    } catch (error) {
      return {
        success: false,
        message:
          "There was a problem creating your blog, please try again later",
      };
    }
  }
}

// Create a blog
// export async function createBlog(data: z.infer<typeof createBlogSchema>) {
//   try {
//     const blog = createBlogSchema.parse(data);

//     console.log(blog);

//     await prisma.blog.create({
//       data: {...blog},
//     });

//     revalidatePath("/admin/blogs");

//     return { success: true, message: "Blog created successfully" };
//   } catch (error) {
//     return { success: false, message: formatError(error) };
//   }
// }

// // Update a product
export async function updateBlog(data: z.infer<typeof updateBlogSchema>) {
  try {
    const blog = updateBlogSchema.parse(data);

    const blogExist = await prisma.blog.findFirst({
      where: { id: blog.id },
    });

    if (!blogExist) throw new Error("Blog not found");

    await prisma.blog.update({
      where: { id: blog.id },
      data: blog,
    });

    revalidatePath("/admin/blogs");

    return { success: true, message: "Product updated successfully" };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// Upload Action
// export async function action(formdata: FormData) {
//   const file = formdata.get("file") as File;
//   if (!file || file.size === 0) {
//     return { error: "No file founded" };
//   }

//   const data = await file.arrayBuffer();

//   await fs.writeFile(`${process.cwd()}/tmp/${file.name}`, Buffer.from(data));
// }
