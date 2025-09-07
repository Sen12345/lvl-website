import { Metadata } from "next";
import CreateBlogForm from "@/components/admin/create-blog-form";
// import { requireAdmin } from "@/lib/auth-guard";
export const metadata: Metadata = {
  title: "Create Product",
};

const CreateProductPage = async () => {
  // await requireAdmin();
  return (
    <>
      <div className="flex justify-center">
        <CreateBlogForm type="Create" />
      </div>
    </>
  );
};

export default CreateProductPage;
