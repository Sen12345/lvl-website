"use server";

import { revalidatePath } from "next/cache";
import { contactFormSchema } from "../validations";
import z from "zod";
import { formatError } from "../utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function contactFormAction(
  contacts: z.infer<typeof contactFormSchema>
) {
  try {
    const { data, error } = await resend.emails.send({
      from: "LVL Site <onboarding@resend.dev>",
      to: ["senatorcox90@gmail.com"],
      subject: "Client Query ",
      react: `${contacts.fullName}`,
    });

    // if (error) {
    //   return Response.json({ error }, { status: 500 });
    // }

    // return Response.json(data);

    revalidatePath("/admin/users");

    return {
      success: true,
      message:
        "Query sent successfully, someone will be intouch with you as soon as possible",
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// import { FormState } from "react-hook-form";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function contactFormAction(
//   prevState: FormState,
//   formData: FormData
// ) {
//   const fullname = formData.get("fullname") as string;
//   const email = formData.get("email") as string;
//   const number = formData.get("number") as string;
//   const message = formData.get("message") as string;

//   const { data, error } = await resend.emails.send({
//     from: "onboarding@resend.dev",
//     to: "senatorcox90@gmail.com",
//     subject: `Client Request From LVL`,
//     react: `${fullname}`,
//   });
// }
