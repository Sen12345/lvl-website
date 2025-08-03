import { NextResponse } from "next/server";
import { Resend } from "resend";
import GithubAccessTokenEmail from "../../../components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const { data } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "senatorcox90@gmail.com",
      subject: "hello world",
      react: GithubAccessTokenEmail({ username: "Senator" }),
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
