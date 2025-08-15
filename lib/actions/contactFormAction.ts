"use server";
export type Errors = {
  name: string;
  fullname?: string;
  email?: string;
  number?: string;
  message?: string;
};
export type FormState = {
  errors: Errors;
};

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function contactFormAction(
  prevState: FormState,
  formData: FormData
) {
  const fullname = formData.get("fullname") as string;
  const email = formData.get("email") as string;
  const number = formData.get("number") as string;
  const message = formData.get("message") as string;

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "senatorcox90@gmail.com",
    subject: `Client Request From LVL`,
    react: `${fullname}`,
  });

  const errors: Errors = {
    name: "",
  };

  if (!fullname) {
    errors.fullname = "Full name is required";
  }

  if (!email) {
    errors.email = "Email is required";
  }

  if (!number) {
    errors.number = "Phone number is required";
  }
  if (!message) {
    errors.message = "Request message is required";
  }

  if (Object.keys(errors).length > 0 && data?.id) {
    return { errors, data };
  }

  return { errors, data, error };
}
