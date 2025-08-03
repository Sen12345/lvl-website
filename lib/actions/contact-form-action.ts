// "use server";
// import { revalidatePath } from "next/cache";
// import { contactFormSchema } from "../validations";
// import { z } from "zod";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function submitContactForm(
//   dataa: z.infer<typeof contactFormSchema>
// ) {
//   // const contact = contactFormSchema.parse(dataa);

//   const formData = new FormData();

//   const name = formData.get("fullName");
//   const email = formData.get("email");
//   const number = formData.get("number");
//   const message = formData.get("message");
//   console.log(name + " " + email + " " + number + " " + message);

//   const { data, error } = await resend.emails.send({
//     from: "onboarding@resend.dev",
//     to: "senatorcox90@gmail.com",
//     subject: `Client Request From LVL`,
//     react: `${name}`,
//   });

//   // if (contact !== null) {
//   //   return {
//   //     contacts: contact,
//   //     success: true,
//   //     message: "Query submitted successfully",
//   //   };
//   //   revalidatePath("/");
//   // } else {
//   //   throw new Error("There is a problem processing your query");
//   // }
// }
