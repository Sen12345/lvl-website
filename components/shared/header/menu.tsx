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

const barlow = Barlow({ subsets: ["latin"], weight: "400" });

const Menu = () => {
  return (
    <div className="flex flex-row py-0">
      <nav className="hidden lg:flex  gap-1">
        <ModeToggle />
        <ul className={`${barlow.className} flex gap-4`}>
          <li className="hover:bg-lime-400  px-5 py-2">
            <Link href="/#contact" className="text-black">
              Contact
            </Link>
          </li>
          <li className="hover:bg-lime-400  px-5 py-2">
            <Link href="/#about" className="text-black">
              About
            </Link>
          </li>
          <li className="hover:bg-lime-400 text-black  px-5 py-2">
            <Link href="/#services" className="text-black">
              Services
            </Link>
          </li>
          <li className="bg-lime-400  px-5 py-2    text-black hover:text-white duration-500">
            <Link href="/blogs">Blog</Link>
          </li>
        </ul>
      </nav>
      <nav className="lg:hidden ">
        <Sheet>
          <SheetTrigger className="align-middle text-black">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="p-4 flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle />
            <SheetDescription>
              <ul className={`${barlow.className} flex flex-col gap-4`}>
                <li className="hover:bg-lime-400 px-5 py-2">
                  <Link href="/#contact">Contact</Link>
                </li>
                <li className="hover:bg-lime-400 px-5 py-2">
                  <Link href="/#about">About</Link>
                </li>
                <li className="hover:bg-lime-400  px-5 py-2">
                  <Link href="/">Services</Link>
                </li>
                <li className="bg-lime-400  px-5 py-2  text-center   text-black hover:text-white duration-500">
                  <Link href="/blogs">Blog</Link>
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
