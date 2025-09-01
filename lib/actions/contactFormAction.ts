"use server";

import { revalidatePath } from "next/cache";
import { contactFormSchema } from "../validations";
import z, { success } from "zod";
import { formatError } from "../utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function contactFormAction(
  contacts: z.infer<typeof contactFormSchema>
) {
  try {
    const { data, error } = await resend.emails.send({
      from: "LVL Website <onboarding@resend.dev>",
      to: ["senatorcox90@gmail.com"],
      subject: "Client's Query ",
      react: `${contacts.fullName}`,
    });

    if (error) {
      return { error };
    }

    revalidatePath("/admin/users");

    return {
      data: data,
      success: true,
      message:
        "Query sent successfully, someone will be in touch with you as soon as possible",
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
