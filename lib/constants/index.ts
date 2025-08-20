export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "London Vibes Ltd";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_DESCRIPTION || "Web Developer";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
export const SENDER_EMAIL = process.env.SENDER_EMAIL || "onboarding@resend.dev";

export const LATEST_BLOG_LIMIT = Number(process.env.LATEST_BLOG_LIMIT || 2);

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
  images: [],
};
