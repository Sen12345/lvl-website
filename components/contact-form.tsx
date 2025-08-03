// "use client";

// import { submitContactForm } from "@/lib/actions/contact-form-action";
// import { contactFormSchema } from "@/lib/validations";
// import { Contact } from "@/types";
// import { Barlow } from "next/font/google";
// import { toast } from "sonner";

// import { Button } from "./ui/button";
// import { useActionState } from "react";
// import { useTransition } from "react";
// import { Loader } from "lucide-react";
// import { contactFormAction } from "@/lib/actions/form-action";

// const barlow = Barlow({ subsets: ["latin"], weight: "300" });

// const ContactForm = () => {
//   const [isPending, startTransition] = useTransition();

//   // const onSubmit: SubmitHandler<z.infer<typeof contactFormSchema>> = async (
//   //   values
//   // ) => {
//   // startTransition(async () => {
//   // const res = await formAction(new FormData(), values);
//   // if (res?.fullName) {
//   //   toast.success("", { description: "Query submitted successfully" });
//   // } else {
//   //   toast.error("", {
//   //     description:
//   //       "There was a problem submitting your query, please try again later",
//   //   });
//   // }
//   // form.reset({ fullName: "", email: "", number: "", message: "" });
//   // });
//   // };

//   return (
//     <div className={`${barlow.className} w-90`}>
//       <form
//         // onSubmit={() => form.handleSubmit(onSubmit)}
//         method="POST"
//         action={contactFormAction}
//       >
//         <input
//           type="text"
//           name="fullname"
//           className="pl-4 w-full py-4  text-black bg-white opacity-40  rounded-none hover:opacity-100  border-l-4 border-lime-400 border-opacity-100"
//           placeholder="Full Name"
//         />
//         <input
//           type="text"
//           name="email"
//           className="pl-4 w-full py-4  text-black bg-white opacity-40  rounded-none hover:opacity-100  border-l-4 border-lime-400 border-opacity-100"
//           placeholder="Email"
//         />
//         <input
//           type="text"
//           name="number"
//           className="pl-4 w-full py-4  text-black bg-white opacity-40  rounded-none hover:opacity-100  border-l-4 border-lime-400 border-opacity-100"
//           placeholder="Your Mobile Number"
//         />
//         <textarea
//           cols={20}
//           rows={4}
//           className="pl-4 w-full py-4  text-black bg-white opacity-40  rounded-none hover:opacity-100  border-l-4 border-lime-400 border-opacity-100"
//           placeholder="Your Maeeage"
//         />

//         <Button
//           type="submit"
//           className="px-4  get-in-touch rounded-none text-black bg-lime-500  transition-colors py-6 my-3 cursor-pointer hover:bg-lime-300 hover:opacity-100 "
//         >
//           {isPending ? (
//             <div className="flex flex-row justify-center items-center">
//               <p className="px-4  ">Submitting...</p>
//               <Loader className="w-4 h-4  animate-spin " />
//             </div>
//           ) : (
//             "Submit Query"
//           )}
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
