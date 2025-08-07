import { z } from "zod";
import { contactFormSchema, latestBlogSchema } from "@/lib/validations";

export type Contact = z.infer<typeof contactFormSchema>;
export type Blog = z.infer<typeof latestBlogSchema> & {
  id: string;
  createdAt: Date;
};
