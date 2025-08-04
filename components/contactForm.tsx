"use client";
import { useActionState, useEffect, useState, useTransition } from "react";
import { Barlow } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { contactFormAction, FormState } from "@/lib/actions/contactFormAction";
import { toast } from "sonner";
import { Errors } from "@/lib/actions/contactFormAction";

const barlow = Barlow({ subsets: ["latin"], weight: "300" });

export default function ContactFormPage() {
  const initialState: FormState = {
    errors: {},
  };
  const [state, formAction] = useActionState(contactFormAction, initialState);
  const [isPending, startTransition] = useTransition();

  const onSubmit = async () => {
    startTransition(async () => {
      if (
        !state.errors.fullname ||
        !state.errors.email ||
        !state.errors.number ||
        !state.errors.number
      ) {
        toast.success("", {
          description:
            "Your request sent successfully, someone will be in touch with you as soon as possible",
        });
      } else {
        return;
      }
    });
  };

  return (
    <div className={`${barlow.className} w-90`}>
      <form onSubmit={onSubmit} action={formAction}>
        <div className="my-2">
          <input
            type="text"
            name="fullname"
            className="pl-4 w-full py-4  text-black bg-white opacity-40  rounded-none hover:opacity-100  border-l-4 border-lime-400 border-opacity-100"
            placeholder="Full Name"
          />
          {state?.errors?.fullname && (
            <p className="text-red-500">{state.errors.fullname}</p>
          )}
        </div>
        <div className="my-2">
          <input
            type="text"
            name="email"
            className="pl-4 w-full py-4  text-black bg-white opacity-40  rounded-none hover:opacity-100  border-l-4 border-lime-400 border-opacity-100"
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
            className="pl-4 w-full py-4  text-black bg-white opacity-40  rounded-none hover:opacity-100  border-l-4 border-lime-400 border-opacity-100"
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
            rows={4}
            className="pl-4 w-full py-4  text-black bg-white opacity-40  rounded-none hover:opacity-100  border-l-4 border-lime-400 border-opacity-100"
            placeholder="Your Maeeage"
          />
          {state?.errors?.message && (
            <p className="text-red-500">{state.errors.message}</p>
          )}
        </div>
        <div>
          <Button
            type="submit"
            className="px-4  get-in-touch rounded-none text-black bg-lime-500  transition-colors py-6   cursor-pointer hover:bg-lime-300 hover:opacity-100 "
          >
            {isPending ? (
              <div className="flex flex-row justify-center items-center">
                <p className="px-4  ">Submitting...</p>
                <Loader className="w-4 h-4  animate-spin " />
              </div>
            ) : (
              "Submit Query"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
