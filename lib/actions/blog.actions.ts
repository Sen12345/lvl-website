"use server";

import { prisma } from "@/db/prisma";
import { convertToPlainObject, formatError } from "../utils";
import { revalidatePath } from "next/cache";
import { latestBlogSchema, updateBlogSchema } from "@/lib/validations";
import z from "zod";

// Create a product
export async function createBlog(data: z.infer<typeof latestBlogSchema>) {
  try {
    const blog = latestBlogSchema.parse(data);

    await prisma.blog.create({
      data: blog,
    });

    revalidatePath("/admin/blogs");

    return { success: true, message: "Blog created successfully" };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// Update a product
export async function updateBlog(data: z.infer<typeof latestBlogSchema>) {
  try {
    const blog = updateBlogSchema.parse(data);

    const blogExist = await prisma.blog.findFirst({
      where: { id: blog.id },
    });

    if (!blogExist) throw new Error("Product not found");

    await prisma.blog.update({
      where: { id: blog.id },
      data: blog,
    });

    revalidatePath("/admin/blogs");

    return { success: true, message: "Blog updated successfully" };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }

  // const session = await auth();
  // const userId = session?.user?.id ? (session.user.id as string) : undefined;
  // const headline = formData.get("headline") as string;
  // const paragraph1 = formData.get("paragraph1") as string;
  // const paragraph2 = formData.get("paragraph2") as string;
  // const bloglinks = formData.get("bloglinks") as string;
  // const images = formData.get("images");
  // const fields = {
  //   userId: userId,
  //   headline: headline,
  //   paragraph1: paragraph1,
  //   paragraph2: paragraph2,
  //   bloglinks: bloglinks,
  // };
  // await prisma.blog.create({
  //   data: fields,
  // });
  // const errors: Blog = {
  //   headline: "",
  //   paragraph1: "",
  //   paragraph2: "",
  //   bloglinks: "",
  //   images: [],
  // };
  // if (!headline) {
  //   errors.headline = "Full name is required";
  // }
  // if (!paragraph1) {
  //   errors.paragraph1 = "Email is required";
  // }
  // if (!paragraph2) {
  //   errors.paragraph2 = "Phone number is required";
  // }
  // if (!bloglinks) {
  //   errors.bloglinks = "Request message is required";
  // }
  // if (Object.keys(errors).length > 0) {
  //   return { errors };
  // }
  // return { errors };
}
