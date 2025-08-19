"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUpUser } from "@/lib/actions/user.actions";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signUpDefaultValues } from "@/lib/constants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const SignUpForm = () => {
  const [data, action] = useActionState(signUpUser, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const SignUpButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className="w-full" variant="default">
        {pending ? "Submitting..." : "Sign Up"}
      </Button>
    );
  };

  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-x-6">
        <div>
          <Label htmlFor="name" className="py-1">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            defaultValue={signUpDefaultValues.name}
            className="my-2"
          />
        </div>
        {/* {data && !data.success && (
          <div className="text-center py-2 text-destructive">
            {data.message}
          </div>
        )} */}
        <div>
          <Label htmlFor="email" className="py-1">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="text"
            autoComplete="email"
            defaultValue={signUpDefaultValues.email}
            className="my-2"
          />
        </div>
        {/* {data && !data.success && (
          <div className="text-center py-2 text-destructive">
            {data.message}
          </div>
        )} */}
        <div>
          <Label htmlFor="password" className="py-1">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="password"
            defaultValue={signUpDefaultValues.password}
            className="my-2"
          />
        </div>
        {data && data.message.valueOf().hasOwnProperty(2) && (
          <div className="text-center py-2 text-destructive">
            {data.message.toString()}
          </div>
        )}
        <div>
          <Label htmlFor="password" className="py-1">
            Confirm Password
          </Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            autoComplete="confirmPassword"
            defaultValue={signUpDefaultValues.confirmPassword}
            className="my-2"
          />
        </div>
        <div className="py-2">
          <SignUpButton />
        </div>

        {data && !data.success && (
          <div className="text-center py-2 text-destructive">
            {data.message}
          </div>
        )}

        <div className="text-lg text-center text-muted-foreground">
          Already have an account?{" "}
          <Link href="/sign-in" target="_self" className="link">
            Sign In
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
