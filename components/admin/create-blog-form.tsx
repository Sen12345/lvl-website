// "use client";
// import { useActionState, useTransition } from "react";
// import { Barlow } from "next/font/google";
// import { Button } from "@/components/ui/button";
// import { Loader } from "lucide-react";
// import { contactFormAction, FormState } from "@/lib/actions/contactFormAction";
// import { toast } from "sonner";

// const barlow = Barlow({ subsets: ["latin"], weight: "300" });

// const initialState: FormState = {
//   errors: {},
// };
// export default function CreateBlogForm() {
//   const [state, formAction] = useActionState(contactFormAction, initialState);
//   const [isPending, startTransition] = useTransition();

//   const onSubmit = async () => {
//     startTransition(async () => {
//       if (
//         !state.errors.headline ||
//         !state.errors.paragraph1 ||
//         !state.errors.paragraph2 ||
//         !state.errors.bloglinks
//         // !state.errors.images
//       ) {
//         return;
//       } else {
//         toast.success("", {
//           description: "Blogs created successfully",
//         });
//       }
//     });
//   };

//   return (
//     <div
//       className={`${barlow.className} w-full flex justify-center items-center`}
//     >
//       <form onSubmit={onSubmit} action={formAction}>
//         <div className="text-center text-4xl pb-2 text-lime-500 focus:txt-white hover:text-white">
//           Create New Blog
//         </div>
//         <div className="my-2">
//           <input
//             type="text"
//             name="headline"
//             className="pl-4 w-full py-4 border-2 text-black bg-white opacity-40  rounded-none focus:opacity-100 hover:opacity-100  border-l-4 border-lime-400 border-opacity-100"
//             placeholder="Blog Title"
//           />
//           {state?.errors.headline && (
//             <p className="text-red-500">{state.errors.headline}</p>
//           )}
//         </div>
//         <div className="my-2">
//           <input
//             type="text"
//             name="paragraph1"
//             className="pl-4 w-full py-4  text-black border-2 bg-white opacity-40  rounded-none focus:opacity-100 hover:opacity-100  border-l-4 border-lime-400 border-opacity-100"
//             placeholder="Paragraph 1"
//           />
//           {state?.errors?.paragraph1 && (
//             <p className="text-red-500">{state.errors.paragraph1}</p>
//           )}
//         </div>
//         <div className="my-2">
//           <input
//             type="text"
//             name="paragraph2"
//             className="pl-4 w-full py-4  text-black border-2 bg-white opacity-40  rounded-none focus:opacity-100 hover:opacity-100  border-l-4 border-lime-400 border-opacity-100"
//             placeholder="Paragraph 2"
//           />
//           {state?.errors?.paragraph2 && (
//             <p className="text-red-500">{state.errors.paragraph2}</p>
//           )}
//         </div>
//         <div className="mt-2 mb-1">
//           <textarea
//             cols={20}
//             name="bloglinks"
//             rows={4}
//             className="pl-4 w-full py-4 border-2 text-black bg-white opacity-40  rounded-none focus:opacity-100 hover:opacity-100  border-l-4 border-lime-400 border-opacity-100"
//             placeholder="A Url Link"
//           />
//           {state?.errors?.bloglinks && (
//             <p className="text-red-500">{state.errors.bloglinks}</p>
//           )}
//         </div>
//         {/* <div className="my-2">
//           <input
//             type="file"
//             name="images[]"
//             className="pl-4 w-full py-4 border-2 text-black bg-white opacity-40  rounded-none focus:opacity-100 hover:opacity-100  border-l-4 border-lime-400 border-opacity-100"
//             placeholder="Blog Image"
//           />
//           {state?.errors?.images && (
//             <p className="text-red-500">{state.errors.images[0]}</p>
//           )}
//         </div> */}
//         <div>
//           <Button
//             type="submit"
//             className="px-6 py-[28px]  hover:text-white focus:text-white hover:bg-lime-500 get-in-touch rounded-none text-black bg-lime-500  transition-colors    cursor-pointer  hover:opacity-100 "
//           >
//             {isPending ? (
//               <div className="flex flex-row justify-center items-center">
//                 <p className="px-4  ">Submitting...</p>
//                 <Loader className="w-4 h-4  animate-spin " />
//               </div>
//             ) : (
//               <div className="text-xl lg:text-lg">Submit Query</div>
//             )}
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// }
