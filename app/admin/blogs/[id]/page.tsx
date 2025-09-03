import UpdateBlogForm from "@/components/admin/update-blog-form";
import { getBlogById } from "@/lib/actions/blog.actions";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Update Blog",
};

const AdminBlogUpdate = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;

  const blog = await getBlogById(id);

  if (!blog) return notFound();
  console.log(blog.id);
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <h2 className="h2">Update Blog</h2>
      <UpdateBlogForm type="Update" blog={blog} blogId={blog.id} />
    </div>
  );
};

export default AdminBlogUpdate;
