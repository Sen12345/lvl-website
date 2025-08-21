import { Metadata } from "next";
import BlogForm from "@/components/admin/blog-form";
// import { requireAdmin } from "@/lib/auth-guard";
export const metadata: Metadata = {
  title: "Create Blog",
};

const CreateBlogPage = async () => {
  // await requireAdmin();
  return (
    <>
      <div className="flex justify-center">
        <BlogForm type="Create" />
      </div>
    </>
  );
};

export default CreateBlogPage;
