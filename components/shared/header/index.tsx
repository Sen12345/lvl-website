import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Menu from "./menu";
// import { Barlow } from "next/font/google";

// const barlow = Barlow({
//   subsets: ["latin"],
//   weight: "400",
// });

const Header = () => {
  return (
    <div className="w-screen  bg-white fixed top-0 z-50 border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex flex-row">
            <Image
              src="/logo/lvl-logo.png"
              alt="Company logo"
              width={48}
              height={48}
              className="w-10 "
              quality={100}
              priority={true}
            />
            <span
              className={`hidden lg:block text-black  font-bold text-2xl ml-1 hover:text-lime-600`}
            >
              {APP_NAME}
            </span>
          </Link>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
