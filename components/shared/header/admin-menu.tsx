import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { auth } from "@/auth";

const AdminMenu = async () => {
  const session = await auth();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="mx-14 ">
          {session?.user.role === "admin" && (
            <Button
              variant={"outline"}
              className="w-12 h-12  text-xs rounded-full my-2"
            >
              Admin
            </Button>
          )}
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
    </>
  );
};

export default AdminMenu;
