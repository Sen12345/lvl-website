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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";

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
              className="text-black text-center rounded-md px-4 py-[12px] hover:bg-lime-400 focus:bg-lime-400"
            >
              Contact
            </Link>
          </li>
          <li className="mx-2 hover:text-white duration-500">
            <Link
              href="/#about"
              className="text-black text-center rounded-md px-4 py-[12px] hover:bg-lime-400 focus:bg-lime-400"
            >
              About
            </Link>
          </li>
          <li className="mx-2 hover:text-white duration-500">
            <Link
              href="/#services"
              className="text-black text-center px-4 rounded-md py-[12px] hover:bg-lime-400 focus:bg-lime-400"
            >
              Services
            </Link>
          </li>

          <li className="hover:text-white  duration-500">
            <Link
              href="/blogs"
              className="bg-lime-500 text-center px-8 py-[12px] rounded-md hover:bg-lime-400 focus:bg-lime-400  text-black"
            >
              Blog
            </Link>
          </li>
          <li className="px-5 ">
            <UserButton />
          </li>
        </ul>
      </nav>
      <nav className="lg:hidden flex flex-col px-4">
        <Sheet>
          <SheetTrigger className="align-middle text-black">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className=" flex flex-col items-start">
            <SheetTitle className="p-4">Menu</SheetTitle>
            <SheetDescription>
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="mx-14 ">
                  <Button
                    variant={"outline"}
                    className="w-12 h-12  text-xs rounded-full my-2"
                  >
                    Admin
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-center px-4 py-2 my-2 border-[0.01px]">
                  <DropdownMenuLabel className="my-2">
                    <Link href="/overview">Overview</Link>
                  </DropdownMenuLabel>
                  <DropdownMenuLabel className="my-3">
                    <Link href="/orders">Orders</Link>
                  </DropdownMenuLabel>
                  <DropdownMenuLabel className="my-3">
                    <Link href="/bloging">Bloging</Link>
                  </DropdownMenuLabel>
                  <DropdownMenuLabel className="my-3">
                    <Link href="/users">users</Link>
                  </DropdownMenuLabel>
                </DropdownMenuContent>
              </DropdownMenu>
              <ul
                className={`${barlow.className}  flex-col p-4 justify-center items-center text-center `}
              >
                <li className="">
                  <ModeToggle />
                </li>
                <li className="my-8 flex-1 ">
                  <Link
                    href="/#contact"
                    className="py-4 px-8 rounded-md focus:bg-lime-300"
                  >
                    Contact
                  </Link>
                </li>
                <li className="my-8 flex-1 ">
                  <Link
                    href="/#about"
                    className="py-4 rounded-md px-8 focus:bg-lime-300"
                  >
                    About
                  </Link>
                </li>
                <li className="my-8  flex-1 ">
                  <Link
                    href="/#services"
                    className="py-4 px-8 rounded-md focus:bg-lime-300"
                  >
                    Services
                  </Link>
                </li>

                <li className="my-10 flex-1 ">
                  <Link
                    href="/blogs"
                    className="py-4 px-12  bg-lime-400 rounded-md focus:bg-lime-300"
                  >
                    Blog
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
