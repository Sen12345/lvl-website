"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { contactFormSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Barlow } from "next/font/google";
import { useRouter } from "next/navigation";
import { ControllerRenderProps, useForm } from "react-hook-form";
import z from "zod";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { contactFormAction } from "@/lib/actions/contactFormAction";
import { contactDefaultValues } from "@/lib/constants";
import { Loader } from "lucide-react";

const barlow = Barlow({ subsets: ["latin"], weight: "300" });

const ContactFormPage = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: contactDefaultValues,
  });

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    try {
      const res = await contactFormAction(values);

      if (!res.success) return toast.error("", { description: res.message });

      toast.success("", { description: res.message });

      form.reset();
      router.push("/");
    } catch (error) {
      toast.error("", { description: (error as Error).message });
    }
  };

  return (
    <Form {...form}>
      <form
        className="w-90"
        method="POST"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div
          className={` ${barlow.className} text-center text-3xl pb-2 text-lime-500 focus:txt-white hover:text-white`}
        >
          Your Query
        </div>
        {/*Full Name*/}
        <div className="w-full">
          <FormField
            control={form.control}
            name="fullName"
            render={({
              field,
            }: {
              field: ControllerRenderProps<
                z.infer<typeof contactFormSchema>,
                "fullName"
              >;
            }) => (
              <FormItem>
                <FormLabel></FormLabel>
                <FormControl>
                  <div className="">
                    <input
                      className="pl-4 w-full py-4  text-black bg-white opacity-40  rounded-none focus:opacity-100 hover:opacity-100  border-l-4 border-lime-400 border-opacity-100"
                      placeholder="Full Name"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/*Email*/}
        <div className="w-full">
          <FormField
            control={form.control}
            name="email"
            render={({
              field,
            }: {
              field: ControllerRenderProps<
                z.infer<typeof contactFormSchema>,
                "email"
              >;
            }) => (
              <FormItem>
                <FormLabel className=""></FormLabel>
                <FormControl>
                  <div className="">
                    <input
                      className="pl-4 w-full py-4  text-black bg-white opacity-40  rounded-none focus:opacity-100 hover:opacity-100  border-l-4 border-lime-400 border-opacity-100"
                      placeholder="Email"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/*Contact number*/}
        <div className="w-full">
          <FormField
            control={form.control}
            name="number"
            render={({
              field,
            }: {
              field: ControllerRenderProps<
                z.infer<typeof contactFormSchema>,
                "number"
              >;
            }) => (
              <FormItem>
                <FormLabel className=""></FormLabel>
                <FormControl>
                  <div className="">
                    <input
                      className="pl-4 w-full py-4  text-black bg-white opacity-40  rounded-none focus:opacity-100 hover:opacity-100  border-l-4 border-lime-400 border-opacity-100"
                      placeholder="Contact Number"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/*Message*/}
        <div className="w-full">
          <FormField
            control={form.control}
            name="message"
            render={({
              field,
            }: {
              field: ControllerRenderProps<
                z.infer<typeof contactFormSchema>,
                "message"
              >;
            }) => (
              <FormItem>
                <FormLabel className=""></FormLabel>
                <FormControl>
                  <div className="">
                    <textarea
                      cols={22}
                      rows={4}
                      className="pl-4 w-full py-4  text-black bg-white opacity-40  rounded-none focus:opacity-100 hover:opacity-100  border-l-4 border-lime-400 border-opacity-100"
                      placeholder="Your Message"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="w-full my-[2px] ">
          <Button
            type="submit"
            className="px-7 py-8 w-full hover:text-white focus:text-white hover:bg-lime-500 get-in-touch rounded-none text-black bg-lime-500  transition-colors    cursor-pointer  hover:opacity-100 "
          >
            {form.formState.isSubmitting ? (
              <div className="flex flex-row justify-center items-center">
                <p className="px-4  ">Submitting...</p>
                <Loader className="w-4 h-4  animate-spin " />
              </div>
            ) : (
              <div className={`text-xl ${barlow.className}`}>Submit Query</div>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactFormPage;
