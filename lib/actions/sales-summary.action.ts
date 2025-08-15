import { prisma } from "@/db/prisma";

// Create a summary of monthly sales and new clients

export async function getTotalBlogs() {
  const blogsCount = await prisma.blog.count();
  const usersCount = await prisma.user.count();

  // Calculate total sales
  //   const totalSales = await prisma.blog.aggregate({
  //     _count: { id: true }, //Will throw an error, cant do aggregate on string
  //   });

  // To write raw quer, use await prisma.$queryRaw<Array<{a:string,b:string;totalSales:Prisma.Decimal}>

  return { blogsCount };
}
