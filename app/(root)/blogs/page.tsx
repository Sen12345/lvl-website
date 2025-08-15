import { getLatestBlog } from "@/lib/actions/blog.action";
import { Barlow } from "next/font/google";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { getTotalBlogs } from "@/lib/actions/sales-summary.action";

const barlow = Barlow({
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

const Blogs = async () => {
  const blogs = await getLatestBlog();

  return (
    <>
      <section className={` w-full  `}>
        <div
          id="blog"
          className=" bg-[url('/img_slide/img_04.jpg')] bg-cover hover:scale-105  bg-center  px-6 h-screen bg-fixed  transition-all flex text-center justify-center items-center"
        >
          <div className={`${barlow.className}`}>
            <h1 className="text-yellow-300 text-center py-4 text-2xl">
              THE DIGITAL AGE
            </h1>
            <p
              className={`${montserrat.className} text-yellow-300 text-xl lg:w-5/12 m-auto pt-3 `}
            >
              We are now living in the digital age where everything we do is
              digitalized through Information Technology. No need to be left
              behind, we are here to guide you through the process of becoming
              digitalized on the web.
            </p>
            <div className="w-full py-6 ">
              <Link
                href="#blogs"
                className={`${barlow.className} text-2xl text-yellow-300 flex flex-col items-center justify-center`}
              >
                VIEW BLOGS
                <MdKeyboardDoubleArrowDown
                  size={100}
                  className="cursor-pointer py-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full ">
        <div id="blogs" className="md:w-8/12 mx-auto my-5 ">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              id="blogs"
              className="lg:grid grid-cols-2  my-5  gap-4"
            >
              {blog.images[0] === "/img/eCommerce.png" ? (
                <Link href="https://prostore-sigma-black.vercel.app">
                  <Image
                    src={blog.images[0]}
                    width={500}
                    height={500}
                    className="w-full  lg:py-5"
                    alt="Blog Image"
                    quality={80}
                  />
                </Link>
              ) : (
                <Image
                  src={blog.images[0]}
                  width={500}
                  height={500}
                  className="w-full  lg:py-5"
                  alt="Blog Image"
                  quality={80}
                />
              )}
              <Card className="flex justify-center rounded-0 items-center my-5">
                <CardTitle>{blog.headline}</CardTitle>
                <CardContent>{blog.paragraph1}</CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blogs;
