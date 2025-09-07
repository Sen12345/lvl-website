import { PrismaClient } from "@/generated/prisma";
import sampleData from "./sample_data";

async function main() {
  const prisma = new PrismaClient();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();

  await prisma.blog.deleteMany();
  await prisma.blog.createMany({ data: sampleData.blog });

  // await prisma.user.deleteMany();
  // await prisma.user.createMany({ data: sampleData.users });
  console.log("Database seeded successfully");
}

main();
