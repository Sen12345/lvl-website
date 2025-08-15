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
          <li className=" px-5 py-[10px]">
            <ModeToggle />
          </li>
          <li className="mx-2 hover:text-white duration-500">
            <Link
              href="/#contact"
              className="text-black text-center px-4 py-[12px] hover:bg-lime-400 focus:bg-lime-400"
            >
              Contact
            </Link>
          </li>
          <li className="mx-2 hover:text-white duration-500">
            <Link
              href="/#about"
              className="text-black text-center px-4 py-[12px] hover:bg-lime-400 focus:bg-lime-400"
            >
              About
            </Link>
          </li>
          <li className="mx-2 hover:text-white duration-500">
            <Link
              href="/#services"
              className="text-black text-center px-4 py-[12px] hover:bg-lime-400 focus:bg-lime-400"
            >
              Services
            </Link>
          </li>

          <li className="hover:text-white  duration-500">
            <Link
              href="/blogs"
              className="bg-lime-500 text-center px-6 py-[12px] hover:bg-lime-400 focus:bg-lime-400  text-black"
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
                className={`${barlow.className}  flex-col p-4 justify-center items-center text-center `}
              >
                <li className="">
                  <ModeToggle />
                </li>
                <li className="my-8 flex-1 ">
                  <Link
                    href="/#contact"
                    className="py-4 px-8 focus:bg-lime-300"
                  >
                    Contact
                  </Link>
                </li>
                <li className="my-8 flex-1 ">
                  <Link href="/#about" className="py-4 px-8 focus:bg-lime-300">
                    About
                  </Link>
                </li>
                <li className="my-8  flex-1 ">
                  <Link
                    href="/#services"
                    className="py-4 px-8 focus:bg-lime-300"
                  >
                    Services
                  </Link>
                </li>

                <li className="my-10 flex-1 ">
                  <Link
                    href="/blogs"
                    className="py-4 px-10 bg-lime-400 focus:bg-lime-300"
                  >
                    Blogs
                  </Link>
                </li>
                <li className=" text-center  ">
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
