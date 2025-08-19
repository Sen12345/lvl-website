import { DefaultSession } from "next-auth";

declare module "next-auth" {
  export interface Session {
    user: {
      role: string;
    } & DefaultSession["user"];
    images: string[];
  }
}
