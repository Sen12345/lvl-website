// "use client";

// import { blogDefaultValues } from "@/lib/constants";
// import { createBlogSchema, updateBlogSchema } from "@/lib/validations";
// import { Blog } from "@/types";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useRouter } from "next/navigation";
// import {
//   Controller,
//   ControllerRenderProps,
//   SubmitHandler,
//   useForm,
// } from "react-hook-form";
// import { toast } from "sonner";
// import { z } from "zod";
// import Image from "next/image";

// import {
//   Form,
//   FormField,
//   FormItem,
//   FormControl,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import slugify from "slugify";
// import { Input } from "@/components/ui/input";
// import { createBlog, updateBlog } from "@/lib/actions/blog.actions";
// import { Button } from "@/components/ui/button";
// import { UploadButton } from "@/lib/uploadthing";
// import { Card } from "@/components/ui/card";
// import { CardContent } from "../ui/card";
// import { auth } from "@/auth";

// const CreateBlogForm = ({
//   type,
//   blog,
//   userId,
// }: {
//   type: "Create";
//   blog?: Blog;
//   userId?: string;
// }) => {
//   const router = useRouter();

//   const form = useForm<z.infer<typeof createBlogSchema>>({
//     resolver: zodResolver(createBlogSchema),
//     defaultValues: blog && type === "Create" ? blog : blogDefaultValues,
//   });

//   const onSubmit: SubmitHandler<z.infer<typeof createBlogSchema>> = async (
//     values
//   ) => {
//     const session = await auth();
//     // On update
//     if (type === "Create") {
//       if (!userId) {
//         router.push("/admin/blogs");
//         return;
//       }

//       const res = await createBlog({ ...values });

//       if (!res.success) {
//         toast.error("", { description: res.message });
//       } else {
//         toast.success("", { description: "Blog created successfully" });
//         router.push("/admin/blogs");
//       }
//     }
//   };

//   const images = form.watch("images");
//   // const isFeatured = form.watch("isFeatured");
//   // const banner = form.watch("banner");

//   return (
//     <Form {...form}>
//       <form
//         method="POST"
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="space-y-8 w-full"
//       >
//         <div className="flex flex-col md:flex-row gap-5 ">
//           <div className="w-full">
//             <FormField
//               control={form.control}
//               name="headline"
//               render={({
//                 field,
//               }: {
//                 field: ControllerRenderProps<
//                   z.infer<typeof createBlogSchema>,
//                   "headline"
//                 >;
//               }) => (
//                 <FormItem>
//                   <FormLabel>Blog Headline</FormLabel>
//                   <FormControl>
//                     <div className="relative">
//                       <Input
//                         placeholder="Enter a headline for your blog"
//                         {...field}
//                       />
//                     </div>
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//         </div>
//         <div className="flex flex-col md:flex-row gap-5 ">
//           <div className="w-full">
//             <FormField
//               control={form.control}
//               name="slug"
//               render={({
//                 field,
//               }: {
//                 field: ControllerRenderProps<
//                   z.infer<typeof createBlogSchema>,
//                   "slug"
//                 >;
//               }) => (
//                 <FormItem>
//                   <FormLabel>Slug</FormLabel>
//                   <FormControl>
//                     <div className="relative">
//                       <Input placeholder="Enter blog slug" {...field} />
//                       <Button
//                         type="button"
//                         className="bg-gray-500 hover-bg-gray-600 text-white px-4 py-1 mt-2 "
//                         onClick={() => {
//                           form.setValue(
//                             "slug",
//                             slugify(form.getValues("headline"), { lower: true })
//                           );
//                         }}
//                       >
//                         Generate
//                       </Button>
//                     </div>
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//         </div>
//         <div className="flex flex-col md:flex-row gap-5">
//           <div className="w-full">
//             <FormField
//               control={form.control}
//               name="paragraph1"
//               render={({
//                 field,
//               }: {
//                 field: ControllerRenderProps<
//                   z.infer<typeof createBlogSchema>,
//                   "paragraph1"
//                 >;
//               }) => (
//                 <FormItem>
//                   <FormLabel>Paragraph 1</FormLabel>
//                   <FormControl>
//                     <div>
//                       <Input
//                         placeholder="Enter paragraph 1 of your blog posts"
//                         {...field}
//                       />
//                     </div>
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//         </div>
//         <div className="flex flex-col md:flex-row gap-5 ">
//           <div className="w-full">
//             <FormField
//               control={form.control}
//               name="paragraph2"
//               render={({
//                 field,
//               }: {
//                 field: ControllerRenderProps<
//                   z.infer<typeof createBlogSchema>,
//                   "paragraph2"
//                 >;
//               }) => (
//                 <FormItem>
//                   <FormLabel>Paragraph 2</FormLabel>
//                   <FormControl>
//                     <div>
//                       <Input
//                         placeholder="Enter paragraph 2 of your blog posts"
//                         {...field}
//                       />
//                     </div>
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//         </div>
//         <div className="flex flex-col md:flex-row gap-5">
//           <div className="w-full">
//             <FormField
//               control={form.control}
//               name="bloglinks"
//               render={({
//                 field,
//               }: {
//                 field: ControllerRenderProps<
//                   z.infer<typeof createBlogSchema>,
//                   "bloglinks"
//                 >;
//               }) => (
//                 <FormItem>
//                   <FormLabel>Url Link</FormLabel>
//                   <FormControl>
//                     <div>
//                       <Input
//                         placeholder="Enter a Url linke from your blog"
//                         {...field}
//                       />
//                     </div>
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//         </div>

//         <div className="flex flex-col md:flex-row gap-5 upload-field">
//           <div className="w-full">
//             {/* Field for images */}
//             <Controller
//               control={form.control}
//               name="images"
//               render={({ field }) => (
//                 <div className="grid grid-cols-3 gap-4">
//                   {field.value?.map((img: string, idx: number) => (
//                     <div
//                       key={idx}
//                       className="relative w-32 h-32 rounded-lg overflow-hidden"
//                     >
//                       <Image
//                         src={img}
//                         alt={`Image ${idx}`}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                   ))}
//                   <Input {...field} />
//                 </div>
//               )}
//             />
//           </div>
//         </div>

//         <div className="upload-field my-4">
//           <Button
//             type="submit"
//             size="lg"
//             className="button col-span-2 w-full"
//             disabled={form.formState.isSubmitting}
//           >
//             Create Blog
//           </Button>
//         </div>
//       </form>
//     </Form>
//   );
// };

// export default CreateBlogForm;
