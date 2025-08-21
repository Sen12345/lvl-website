import { z } from "zod";

const validEmail =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export const contactFormSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z
    .string()
    .min(3, "Email must be at least 3 characters")
    .regex(validEmail, { message: "A valid email is required" }),
  number: z.string().min(3, "Number must be at least 3 characters"),
  message: z.string().min(5, "Message must be at least 3 characters"),
});

// Schema for inserting products
export const insertBlogSchema = z.object({
  userId: z.string().min(1, "User ID must be at least 1 character"),
  headline: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  paragraph1: z.string().min(3, "Paragraph 1 must be at least 3 characters"),
  paragraph2: z.string().min(3, "Paragraph 2 must be at least 3 characters"),
  bloglinks: z.string().min(3, "Bloglinks must be at least 3 characters"),
  images: z.array(z.string()).min(1, "Product must have at least one image"),
});

// Schema for updating products
export const updateBlogSchema = insertBlogSchema.extend({
  id: z.string().min(1, "Id is required"),
  userId: z.string().min(1, "User ID must be at least 1 character"),
  headline: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  paragraph1: z.string().min(3, "Paragraph 1 must be at least 3 characters"),
  paragraph2: z.string().min(3, "Paragraph 2 must be at least 3 characters"),
  bloglinks: z.string().min(3, "Bloglinks must be at least 3 characters"),
  images: z.array(z.string()).min(1, "Product must have at least one image"),
});

export const signInFormSchema = z.object({
  email: z.string().min(3, "Invalid email address is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signUpFormSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 6 characters"),
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"],
  });
