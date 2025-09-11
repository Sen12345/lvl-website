"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { createBlog } from "@/lib/actions/blog.actions";
import { useTransition } from "react";
import { createBlogSchema } from "@/lib/validations";
import z from "zod";
import { toast } from "sonner";

export default function CreateBlogForm() {
  const { register, handleSubmit, reset, formState } =
    useForm<z.infer<typeof createBlogSchema>>();
  const [isPending, startTransition] = useTransition();

  const onSubmit: SubmitHandler<z.infer<typeof createBlogSchema>> = async (
    data
  ) => {
    const formData = new FormData();
    formData.append("headline", data.headline);
    formData.append("slug", data.slug);
    formData.append("paragraph1", data.paragraph1);
    formData.append("paragraph2", data.paragraph2);
    formData.append("bloglinks", data.bloglinks);

    if (data.images) {
      Array.from(data.images).forEach((file) =>
        formData.append("images", file)
      );
    }

    startTransition(async () => {
      const res = await createBlog(formData);
      if (res?.success) {
        toast.success("", { description: res?.message });
      }

      if (!res?.success) {
        toast.error("", { description: res?.message });
      }
      reset();
    });
  };

  return (
    <div className="md:w-1/2 mx-auto px-2">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("headline")}
          placeholder="Blog Headline"
          className="border p-2 w-full bg-stone-100"
        />

        <input
          {...register("slug", { required: true })}
          placeholder="Slug"
          className="border p-2 w-full bg-stone-100"
        />

        <input
          {...register("paragraph1", { required: true })}
          placeholder="Paragraph 1"
          className="border p-2 w-full bg-stone-100"
        />

        <input
          {...register("paragraph2", { required: true })}
          placeholder="Paragraph 2"
          className="border p-2 w-full bg-stone-100"
        />
        {formState.errors?.paragraph2 &&
          formState.errors?.paragraph2.type === "required" && (
            <span>This is required</span>
          )}

        <input
          {...register("bloglinks", { required: true })}
          placeholder="Url link from your blog"
          className="border p-2 w-full bg-stone-100"
        />

        <input
          type="file"
          {...register("images")}
          multiple
          accept="image/*"
          className="border p-2 w-full bg-stone-100"
        />

        <button
          type="submit"
          disabled={isPending}
          className="bg-lime-500 text-black px-8 py-4 rounded cursor-pointer"
        >
          {isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
