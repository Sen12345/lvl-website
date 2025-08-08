import { neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@/generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaNeon({ connectionString });

export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    blog: {
      headline: {
        compute(blog) {
          return blog.headline.toString();
        },
      },
      paragraph1: {
        compute(blog) {
          return blog.paragraph1.toString();
        },
      },
      paragraph2: {
        compute(blog) {
          return blog.paragraph2?.toString();
        },
      },
      message: {
        compute(blog) {
          return blog.bloglinks?.toString();
        },
      },
    },
  },
});
export { PrismaClient };
