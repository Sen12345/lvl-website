"use server";

import { prisma } from "@/db/prisma";
import { convertToPlainObject, formatError } from "../utils";
import { LATEST_BLOG_LIMIT, PAGE_SIZE } from "../constants";
import { revalidatePath } from "next/cache";
import { insertBlogSchema, updateBlogSchema } from "../validations";
import z from "zod";
import { Prisma } from "@/generated/prisma";
import { promises as fs } from "fs";

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
export async function deleteProduct(id: string) {
  try {
    const productExist = await prisma.blog.findFirst({
      where: { id },
    });

    if (!productExist) throw new Error("Product not found");

    await prisma.blog.delete({ where: { id } });

    revalidatePath("/admin/products");

    return { success: true, message: "Product deleted successfully" };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// Create a product
export async function createBlog(data: z.infer<typeof insertBlogSchema>) {
  try {
    const blog = insertBlogSchema.parse(data);

    await prisma.blog.create({
      data: blog,
    });

    revalidatePath("/admin/blogs");

    return { success: true, message: "Product created successfully" };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// Update a product
export async function updateBlog(data: z.infer<typeof updateBlogSchema>) {
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

    return { success: true, message: "Product updated successfully" };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// Upload Action

export async function action(formdata: FormData) {
  const file = formdata.get("file") as File;
  if (!file || file.size === 0) {
    return { error: "No file founded" };
  }

  const data = await file.arrayBuffer();

  await fs.writeFile(`${process.cwd()}/tmp/${file.name}`, Buffer.from(data));
}
