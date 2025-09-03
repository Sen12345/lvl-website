"use client";

import { blogDefaultValues } from "@/lib/constants";
import { createBlogSchema } from "@/lib/validations";
import { Blog } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { ControllerRenderProps, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import Image from "next/image";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import slugify from "slugify";
import { Input } from "@/components/ui/input";
import { createBlog } from "@/lib/actions/blog.actions";
import { Button } from "@/components/ui/button";
import { UploadButton } from "@/lib/uploadthing";
import { Card } from "@/components/ui/card";
import { CardContent } from "../ui/card";

const CreateBlogForm = ({
  type,
  blog,
  blogId,
}: {
  type: "Create";
  blog?: Blog;
  blogId?: string;
}) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof createBlogSchema>>({
    resolver: zodResolver(createBlogSchema),
    defaultValues: blogDefaultValues,
  });

  const onSubmit: SubmitHandler<z.infer<typeof createBlogSchema>> = async (
    values
  ) => {
    // On update
    if (type === "Create") {
      if (!blogId) {
        router.push("/admin/blogs");
        return;
      }
      const res = await createBlog(values);
      if (!res.success) {
        toast.error("", { description: res.message });
      } else {
        toast.success("", { description: "Blog created successfully" });
        router.push("/admin/blogs");
      }
    }
  };

  const images = form.watch("images");
  // const isFeatured = form.watch("isFeatured");
  // const banner = form.watch("banner");

  return (
    <Form {...form}>
      <form
        method="POST"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full"
      >
        <div className="flex flex-col md:flex-row gap-5 ">
          <div className="w-full">
            <FormField
              control={form.control}
              name="headline"
              render={({
                field,
              }: {
                field: ControllerRenderProps<
                  z.infer<typeof createBlogSchema>,
                  "headline"
                >;
              }) => (
                <FormItem>
                  <FormLabel>Blog Headline</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Enter a headline for your blog"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 ">
          <div className="w-full">
            <FormField
              control={form.control}
              name="slug"
              render={({
                field,
              }: {
                field: ControllerRenderProps<
                  z.infer<typeof createBlogSchema>,
                  "slug"
                >;
              }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input placeholder="Enter blog slug" {...field} />
                      <Button
                        type="button"
                        className="bg-gray-500 hover-bg-gray-600 text-white px-4 py-1 mt-2 "
                        onClick={() => {
                          form.setValue(
                            "slug",
                            slugify(form.getValues("headline"), { lower: true })
                          );
                        }}
                      >
                        Generate
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full">
            <FormField
              control={form.control}
              name="paragraph1"
              render={({
                field,
              }: {
                field: ControllerRenderProps<
                  z.infer<typeof createBlogSchema>,
                  "paragraph1"
                >;
              }) => (
                <FormItem>
                  <FormLabel>Paragraph 1</FormLabel>
                  <FormControl>
                    <div>
                      <Input
                        placeholder="Enter paragraph 1 of your blog posts"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 ">
          <div className="w-full">
            <FormField
              control={form.control}
              name="paragraph2"
              render={({
                field,
              }: {
                field: ControllerRenderProps<
                  z.infer<typeof createBlogSchema>,
                  "paragraph2"
                >;
              }) => (
                <FormItem>
                  <FormLabel>Paragraph 2</FormLabel>
                  <FormControl>
                    <div>
                      <Input
                        placeholder="Enter paragraph 2 of your blog posts"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full">
            <FormField
              control={form.control}
              name="bloglinks"
              render={({
                field,
              }: {
                field: ControllerRenderProps<
                  z.infer<typeof createBlogSchema>,
                  "bloglinks"
                >;
              }) => (
                <FormItem>
                  <FormLabel>Url Link</FormLabel>
                  <FormControl>
                    <div>
                      <Input
                        placeholder="Enter a Url linke from your blog"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 upload-field">
          <div className="w-full">
            <FormField
              control={form.control}
              name="images"
              render={() => (
                <FormItem>
                  <FormLabel>Images</FormLabel>
                  <Card>
                    <CardContent className="space-y-2 mt-2 min-h-48">
                      <div className="flex-start space-x-2">
                        {images.map((image: string) => (
                          <Image
                            key={image}
                            src={image}
                            alt={image}
                            className="w-20 h-20 object-cover object-center rounded-sm"
                            width={100}
                            height={100}
                          />
                        ))}
                        <FormControl>
                          <UploadButton
                            endpoint="imageUploader"
                            onUploadError={(error: Error) => {
                              toast.error("", {
                                description: `ERROR! ${error.message}`,
                              });
                            }}
                            onClientUploadComplete={(
                              res: { url: string }[]
                            ) => {
                              form.setValue("images", [...images, res[0].url]);
                            }}
                          />
                        </FormControl>
                      </div>
                    </CardContent>
                  </Card>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="upload-field my-4">
          <Button
            type="submit"
            size="lg"
            className="button col-span-2 w-full"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Submitting" : `${type} Blog`}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateBlogForm;
