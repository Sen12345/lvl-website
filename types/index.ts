import { z } from "zod";
import { contactFormSchema, insertBlogSchema } from "@/lib/validations";

export type Contact = z.infer<typeof contactFormSchema>;
export type Blog = z.infer<typeof insertBlogSchema> & {
  id: string;
  userId: string;
  createdAt: Date;
};
