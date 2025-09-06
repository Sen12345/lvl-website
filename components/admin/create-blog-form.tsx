"use client";
import { createBlogSchema, updateBlogSchema } from "@/lib/validations";
import { Blog } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { blogDefaultValues } from "@/lib/constants";
import { Button } from "../ui/button";

// const createProductSchema = z.object({
//   name: z.string().min(1, { message: "Name is required" }),
//   image: z.custom<File>((v) => v instanceof File, {
//     message: "Image is required",
//   }),
// });

// const updateProductSchema = createProductSchema.extend({
//   image: createProductSchema.shape.image.optional(),
// });

export type BlogFormValues =
  | z.infer<typeof createBlogSchema>
  | z.infer<typeof updateBlogSchema>;

interface BlogFormProps {
  type: "Create";
  blog: Blog;
  blogId: string;
}

const CreateBlogForm = ({ blog }: BlogFormProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(
    blog ? blog.images : null
  );

  const isAddMode = !blog;

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<BlogFormValues>({
    resolver: zodResolver(isAddMode ? createBlogSchema : updateBlogSchema),
    defaultValues: blogDefaultValues,
  });

  // revoke object URL to avoid memory leaks
  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const onSubmitHandler = async (data: BlogFormValues) => {
    let imageUrl: string | undefined;
    if (data.images) {
      // build FormData for uploading image
      const formData = new FormData();
      formData.append("file", data.images);

      // mock upload image to server to get image url
      imageUrl = await new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve("https://via.placeholder.com/150");
        }, 1000);
      });
    }

    if (isAddMode) {
      // create product
      console.log({ ...data, images: imageUrl! });
    } else {
      // update product
      console.log({ id: blog!.id, ...data, images: imageUrl });
    }

    reset();
    setImagePreview(blog?.images ?? null);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="flex flex-col md:flex-row gap-5 ">
        <div className="w-full">
          <input {...register("headline")} placeholder="Your blog headline" />
          {errors.headline && <span>{errors.headline.message}</span>}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 ">
        <div className="w-full">
          <Controller
            name="images"
            control={control}
            render={({ field: { ref, name, onBlur, onChange } }) => (
              <input
                type="file"
                multiple
                // ref={ref}
                name="images"
                // onBlur={onBlur}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  onChange(file);
                  setImagePreview(file ? URL.createObjectURL(file) : null);
                }}
              />
            )}
          />
        </div>
      </div>
      {imagePreview && (
        <Image src={imagePreview} width={100} height={100} alt="preview" />
      )}
      {errors.images && <span>{errors.images.message}</span>}

      <div className="upload-field my-4">
        <Button
          type="submit"
          size="lg"
          disabled={(!isAddMode && !isDirty) || isSubmitting}
          className="button col-span-2 w-full"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
};
export default CreateBlogForm;
