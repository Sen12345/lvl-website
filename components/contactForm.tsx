"use client";
import { useActionState, useTransition } from "react";
import { Barlow } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { contactFormAction, FormState } from "@/lib/actions/contactFormAction";
import { toast } from "sonner";

const barlow = Barlow({ subsets: ["latin"], weight: "300" });

const initialState: FormState = {
  errors: {
    name: "",
  },
};
export default function ContactFormPage() {
  const [state, formAction] = useActionState(contactFormAction, initialState);
  const [isPending, startTransition] = useTransition();

  const onSubmit = async () => {
    startTransition(async () => {
      if (
        !state.errors.fullname ||
        !state.errors.email ||
        !state.errors.number ||
        !state.errors.message
      ) {
        toast.success("", {
          description:
            "Your request sent successfully, someone will be in touch with you as soon as possible",
        });
      } else {
        toast.error("", {
          description:
            "There was a problem processing your query, please try again later",
        });
      }
    });
  };

  return (
    <div className={`${barlow.className} w-90`}>
      <form onSubmit={onSubmit} action={formAction}>
        <div className="text-center text-4xl pb-2 text-lime-500 focus:txt-white hover:text-white">
          Your Query
        </div>
        <div className="my-2">
          <input
            type="text"
            name="fullname"
            className="pl-4 w-full py-4  text-black bg-white opacity-40  rounded-none focus:opacity-100 hover:opacity-100  border-l-4 border-lime-400 border-opacity-100"
            placeholder="Full Name"
          />
          {state?.errors?.fullname && (
            <p className="text-red-500">{state.errors.fullname}</p>
          )}
        </div>
        <div className="my-2">
          <input
            type="email"
            name="email"
            className="pl-4 w-full py-4  text-black bg-white opacity-40  rounded-none focus:opacity-100 hover:opacity-100  border-l-4 border-lime-400 border-opacity-100"
            placeholder="Email"
          />
          {state?.errors?.email && (
            <p className="text-red-500">{state.errors.email}</p>
          )}
        </div>
        <div className="my-2">
          <input
            type="text"
            name="number"
            className="pl-4 w-full py-4  text-black bg-white opacity-40  rounded-none focus:opacity-100 hover:opacity-100  border-l-4 border-lime-400 border-opacity-100"
            placeholder="Your Mobile Number"
          />
          {state?.errors?.number && (
            <p className="text-red-500">{state.errors.number}</p>
          )}
        </div>
        <div className="mt-2 mb-1">
          <textarea
            cols={20}
            name="message"
            rows={3}
            className="pl-4 w-full py-4  text-black bg-white opacity-40  rounded-none focus:opacity-100 hover:opacity-100  border-l-4 border-lime-400 border-opacity-100"
            placeholder="Your Message"
          />
          {state?.errors?.message && (
            <p className="text-red-500">{state.errors.message}</p>
          )}
        </div>
        <div>
          <Button
            type="submit"
            className="px-6 py-[36px] lg:py-[28px] hover:text-white focus:text-white hover:bg-lime-500 get-in-touch rounded-none text-black bg-lime-500  transition-colors    cursor-pointer  hover:opacity-100 "
          >
            {isPending ? (
              <div className="flex flex-row justify-center items-center">
                <p className="px-4  ">Submitting...</p>
                <Loader className="w-4 h-4  animate-spin " />
              </div>
            ) : (
              <div className="text-xl lg:text-lg">Submit Query</div>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
