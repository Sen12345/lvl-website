import { formAction } from "@/lib/actions/form-action";
import { Loader } from "lucide-react";
import { Button } from "./ui/button";

const TestForm = () => {
  return (
    <form action={formAction}>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        className="bg-white"
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        className="bg-white"
      />
      <button type="submit" className="bg-red-500">
        Submit
      </button>
    </form>
  );
};

export default TestForm;
