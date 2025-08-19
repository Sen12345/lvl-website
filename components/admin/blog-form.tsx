"use client";

import { blogDefaultValues } from "@/lib/constants";
import { latestBlogSchema, updateBlogSchema } from "@/lib/validations";
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
import { Input } from "@/components/ui/input";
import { createBlog, updateBlog } from "@/lib/actions/blog.actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { UploadButton } from "@/lib/uploadthing";
import { Card } from "@/components/ui/card";
import { CardContent } from "../ui/card";

const ProductForm = ({
  type,
  blog,
  blogId,
}: {
  type: "Create" | "Update";
  blog?: Blog;
  blogId?: string;
}) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof latestBlogSchema>>({
    resolver: zodResolver(latestBlogSchema),
    defaultValues: blog && type === "Update" ? blog : blogDefaultValues,
  });

  const onSubmit: SubmitHandler<z.infer<typeof latestBlogSchema>> = async (
    values
  ) => {
    // On create
    if (type === "Create") {
      const res = await createBlog(values);
      if (!res.success) {
        toast.error("", { description: res.message });
      } else {
        toast.success("", { description: "Product created successfully" });
        router.push("/admin/blogs");
      }
    }

    // On update
    if (type === "Update") {
      if (!blogId) {
        router.push("/admin/blogs");
        return;
      }
      const res = await updateBlog({ ...values, id: blogId });
      if (!res.success) {
        toast.error("", { description: res.message });
      } else {
        toast.success("", { description: "Product created successfully" });
        router.push("/admin/products");
      }
    }
  };

  const images = form.watch("images");
  //   const isFeatured = form.watch("isFeatured");
  //   const banner = form.watch("banner");

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
                  z.infer<typeof latestBlogSchema>,
                  "headline"
                >;
              }) => (
                <FormItem>
                  <FormLabel>Blog Headline</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input placeholder="Enter blog headline" {...field} />
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
              name="paragraph1"
              render={({
                field,
              }: {
                field: ControllerRenderProps<
                  z.infer<typeof latestBlogSchema>,
                  "paragraph1"
                >;
              }) => (
                <FormItem>
                  <FormLabel>Paragraph 1</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Enter paragraph 1 of you blog"
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
              name="paragraph2"
              render={({
                field,
              }: {
                field: ControllerRenderProps<
                  z.infer<typeof latestBlogSchema>,
                  "paragraph2"
                >;
              }) => (
                <FormItem>
                  <FormLabel>Paragraph 2</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Enter paragraph 2 of your blog"
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
              name="bloglinks"
              render={({
                field,
              }: {
                field: ControllerRenderProps<
                  z.infer<typeof latestBlogSchema>,
                  "bloglinks"
                >;
              }) => (
                <FormItem>
                  <FormLabel>Url Link</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Enter a Url link from your blog"
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
                            onClientUploadComplete={(
                              res: {
                                ufsUrl: string;
                                url: string;
                              }[]
                            ) => {
                              form.setValue("images", [
                                ...images,
                                res[0].ufsUrl,
                              ]);
                            }}
                            onUploadError={(error: Error) => {
                              toast.error("", {
                                description: `ERROR! ${error.message}`,
                              });
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
            {form.formState.isSubmitting ? "Submitting" : `${type} Product`}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProductForm;
