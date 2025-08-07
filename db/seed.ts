import { PrismaClient } from "@/generated/prisma";
import sampleData from "./sample_data";

async function main() {
  const prisma = new PrismaClient();
  //   await prisma.user.deleteMany();
  await prisma.blog.deleteMany();
  //   await prisma.user.createMany({ data: sampleData.users });
  await prisma.blog.createMany({ data: sampleData.blog });

  console.log("Database seeded successfully");
}

main();
