import { auth } from "@/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTotalBlogs } from "@/lib/actions/sales-summary.action";
import { formatNumber } from "@/lib/utils";
import {
  BadgePoundSterling,
  BadgePoundSterlingIcon,
  BarcodeIcon,
  CreditCard,
} from "lucide-react";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { FaBlog } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { deleteBlog } from "@/lib/actions/blog.actions";
import DeleteDialog from "@/components/shared/delete-dialog";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

const AdminOverview = async () => {
  const session = await auth();

  if (session?.user.role !== "admin") {
    redirect("/sign-in");
    throw new Error("User not authorized");
  }

  const summary = await getTotalBlogs();
  // console.log(summary.blogs.map((id) => id.headline));

  return (
    <div className="space-y-2">
      <div className="flex flex-between">
        <h2 className="h2-bold">Dashboard</h2>

        <Button variant="ghost" asChild>
          <Link
            href="/admin/blogs/create"
            className="bg-black text-white border-2"
          >
            Create Blog
          </Link>
        </Button>
      </div>
      <div className="grid grid:row  gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Total Revenue</CardTitle>
            <BadgePoundSterlingIcon />
          </CardHeader>
          <CardContent>
            <div className="flex text-2x1 gap-1 font-bold">
              <BadgePoundSterling />
              {0}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Total Sales</CardTitle>
            <CreditCard />
          </CardHeader>
          <CardContent>
            <div className="flex text-2x1 gap-1 font-bold">
              <span>Number of Clients {formatNumber(summary.usersCount)}</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Total Blogs</CardTitle>
            <FaBlog />
          </CardHeader>
          <CardContent>
            <div className="flex text-2x1 gap-1 font-bold">
              <span>Number of Blogs {formatNumber(summary.blogsCount)}</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Total Products</CardTitle>
            <BarcodeIcon />
          </CardHeader>
          <CardContent>
            <div className="flex text-2x1 gap-1 font-bold">
              <span>Number of Blogs {7}</span>
            </div>
          </CardContent>
        </Card>
      </div>
      {summary.blogs.map((b) => (
        <div className="grid grid-cols-3 gap-4 my-4  " key={b.id}>
          <div className="flex items-center justify-center ">
            <Image
              src={b.images}
              alt="Blog Image"
              width={200}
              height={200}
              quality={80}
              className="min-w-full min-h-60 rounded-lg"
            />
          </div>
          <div className="col-span-1 lg:my-0 my-4 ">
            <Card className="flex justify-center rounded-0 items-center  h-full">
              <CardTitle>{b.headline}</CardTitle>
              <CardContent>{b.paragraph1}</CardContent>
            </Card>
          </div>
          <div className=" flex items-center justify-center">
            <Button variant="ghost" className="w-20" asChild>
              <Link
                className="bg-black text-white border-2"
                href={`/admin/blogs/${b.id}`}
              >
                Edit
              </Link>
            </Button>
            <DeleteDialog id={b.id} action={deleteBlog} />
          </div>
        </div>
      ))}
      <div className="grid grid-cols-12">Charts</div>
    </div>
  );
};

export default AdminOverview;
