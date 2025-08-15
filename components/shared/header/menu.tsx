import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";
import { Barlow } from "next/font/google";
import ModeToggle from "./mode-toggle";
import UserButton from "./user-button";

const barlow = Barlow({ subsets: ["latin"], weight: "400" });

const Menu = () => {
  return (
    <div className="">
      <nav className="hidden lg:flex justify-center items-center ">
        <ul
          className={`${barlow.className} flex  flex-between items-center justify-center`}
        >
          <li className=" lg:px-5 py-[10px]">
            <ModeToggle />
          </li>
          <li className="hover:bg-lime-400 focus:bg-lime-400 py-[10px] px-5 my-4">
            <Link href="/#contact" className="text-black ">
              Contact
            </Link>
          </li>
          <li className="hover:bg-lime-400 focus:bg-lime-400 py-[10px] px-5 my-4">
            <Link href="/#about" className="text-black">
              About
            </Link>
          </li>
          <li className="hover:bg-lime-400 focus:bg-lime-400 py-[10px] px-5 my-4">
            <Link href="/#services" className="text-black   ">
              Services
            </Link>
          </li>

          <li className="hover:text-white my-4 duration-500">
            <Link
              href="/blogs"
              className="bg-lime-500 text-center px-14 py-[12px] hover:bg-lime-400   text-black"
            >
              Blogs
            </Link>
          </li>
          <li className="px-5 ">
            <UserButton />
          </li>
        </ul>
      </nav>
      <nav className="lg:hidden flex flex-col pr-4">
        <Sheet>
          <SheetTrigger className="align-middle text-black">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className=" flex flex-col items-start">
            <SheetTitle className="p-4">Menu</SheetTitle>

            <SheetDescription>
              <ul
                className={`${barlow.className}  flex flex-col   justify-start `}
              >
                <li className="text-center lg:px-5 ">
                  <ModeToggle />
                </li>
                <li className="hover:bg-lime-400 focus:bg-lime-400 py-[10px] text-center px-5 ">
                  <Link href="/#contact">Contact</Link>
                </li>
                <li className="hover:bg-lime-400 focus:bg-lime-400  py-[10px] text-center px-5 ">
                  <Link href="/#about">About</Link>
                </li>
                <li className="hover:bg-lime-400 focus:bg-lime-400 py-[14px] text-center px-5">
                  <Link href="/#services">Services</Link>
                </li>

                <li className=" hover:text-white focus:bg-lime-400 my-4 text-center  duration-500 ">
                  <Link
                    href="/blogs"
                    className="bg-lime-500 text-center px-14 py-[12px] hover:bg-lime-400   text-black"
                  >
                    Blogs
                  </Link>
                </li>
                <li className=" text-center px-5 ">
                  <UserButton />
                </li>
              </ul>
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};
export default Menu;
