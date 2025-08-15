import { auth } from "@/auth";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const session = await auth();

  if (session?.user.role !== "admin") {
    redirect("/sign-in");
  }

  return <>ADMIN</>;
};

export default AdminPage;
