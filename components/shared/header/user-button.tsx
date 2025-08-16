import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@/auth";
import { signOutUser } from "@/lib/actions/user.actions";
import { UserIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserButton = async () => {
  const session = await auth();
  const firstInitial = session?.user?.name?.charAt(0).toUpperCase() ?? "U";

  return (
    <div className="flex gap-2 items-center">
      {/* {!session && (
        <div>
          <Button asChild className="rounded-none">
            <Link href="/sign-in">
              <UserIcon /> Sign In
            </Link>
          </Button>
        </div>
      )} */}
      {session?.user?.role === "admin" && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="items-center">
              <Button
                variant="ghost"
                className="relative w-10 h-10 rounded-full ml-2 flex items-center justify-center bg-lime-500"
              >
                {firstInitial}
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-x-1">
                <div className="text-md py-3 font-medium leading-none">
                  {session?.user?.name}
                </div>
                <div className="text-md py-3  leading-none">
                  {session?.user?.email}
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuItem>
              <Link href="/admin" className="w-full">
                Admin
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-0 mb-1">
              <form action={signOutUser} className="w-full">
                <Button
                  className="w-full py-4 px-2 h-4 text-black justify-start"
                  variant="ghost"
                >
                  Sign Out
                </Button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};

export default UserButton;
