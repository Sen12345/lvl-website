import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Menu from "./menu";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  return (
    <div className="w-full flex top bg-white fixed h-20 justify-center items-center top-0 z-50 border-b">
      <div className="flex flex-between items-center justify-center w-full">
        <div className="flex-start">
          <Link href="/" className="flex flex-row mb-1 pl-4">
            <Image
              src="/logo/lvl-logo.png"
              alt="Company logo"
              width={48}
              height={48}
              className="w-12"
              quality={100}
              priority={true}
            />
            {/* <span
              className={`${barlow.className}  text-black mt-1 font-bold text-2xl ml-2 hover:text-lime-600`}
            >
              {APP_NAME}
            </span> */}
          </Link>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
