import { z } from "zod";
import {
  contactFormSchema,
  createBlogSchema,
  updateBlogSchema,
} from "@/lib/validations";

export type Contact = z.infer<typeof contactFormSchema>;
export type Blog = z.infer<typeof createBlogSchema> & {
  id: string;
  userId: string;
  createdAt: Date;
};

export type Update = z.infer<typeof updateBlogSchema> & {
  id: string;
  userId: string;
};
