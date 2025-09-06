import { InvoiceData } from "@/types/invoice";

export const APP_NAME =
  process.env.NEXT_PUBLIC_APP_NAME || "London Vibes Limited";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_DESCRIPTION || "Web Developer";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
export const SENDER_EMAIL = process.env.SENDER_EMAIL || "onboarding@resend.dev";

export const LATEST_BLOG_LIMIT = Number(process.env.LATEST_BLOG_LIMIT || 1);
export const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 6;

export const signInDefaultValues = {
  email: "admin@londonvibes.net",
  password: "123456",
};
export const signUpDefaultValues = {
  name: "Senator Cox",
  email: "admin@londonvibes.net",
  password: "123456",
  confirmPassword: "123456",
};

export const blogDefaultValues = {
  headline: "",
  paragraph1: "",
  paragraph2: "",
  bloglinks: "",
  slug: "",
  images: "",
};

export const contactDefaultValues = {
  fullName: "",
  email: "",
  number: "",
  message: "",
};

export const initialInvoiceData: InvoiceData = {
  invoiceNumber: `INV-${Date.now()}`,
  date: new Date().toISOString().split("T")[0],
  fromName: "",
  fromEmail: "",
  toName: "",
  toEmail: "",
  items: [{ id: "1", description: "", quantity: 1, rate: 0, amount: 0 }],
  taxRate: 10,
  subtotal: 0,
  taxAmount: 0,
  total: 0,
};
