import { Metadata } from "next";
import CreateBlogForm from "@/components/admin/create-blog-form";
import { createBlog } from "@/lib/actions/blog.actions";
// import { requireAdmin } from "@/lib/auth-guard";
export const metadata: Metadata = {
  title: "Create Product",
};

const CreateProductPage = async () => {
  // await requireAdmin();
  return (
    <div className="">
      <CreateBlogForm />
    </div>
  );
};

export default CreateProductPage;
