"use server";
import { PrismaClient } from "@/db/prisma";
import { LATEST_BLOG_LIMIT } from "@/lib/constants";
import { convertToPlainObject } from "@/lib/utils";

export async function getLatestBlog() {
  const prisma = new PrismaClient();

  const data = await prisma.blog.findMany({
    take: LATEST_BLOG_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(data);
}
