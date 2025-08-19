import { prisma } from "@/db/prisma";

// Create a summary of monthly sales and new clients

export async function getTotalBlogs() {
  const blogsCount = await prisma.blog.count();
  const blogs = await prisma.blog.findMany();
  const usersCount = await prisma.user.count();

  // Calculate total sales
  // const totalSales = await prisma.blog.aggregate({
  //   _count: { id: true }, //Will throw an error, cant do aggregate on string
  // });

  // Get monthly sales
  const salesData = await prisma.$queryRaw`SELECT * FROM "User"`;

  console.log(salesData);

  // To write raw quer, use await prisma.$queryRaw<Array<{a:string,b:string;totalSales:Prisma.Decimal}>
  return { blogsCount, usersCount, blogs, salesData };
}
