/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import z, { success } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format number
export const NUMBER_FORMATTER = new Intl.NumberFormat("en-UK");

export function formatNumber(number: number) {
  return NUMBER_FORMATTER.format(number);
}

// Convert prisma object to regular javascript object
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

// Format Errors

export async function formatError(error: any) {
  if (error instanceof z.ZodError) {
    // Handle Zod error
    const fieldErrors = Object.keys(error.issues).map(
      (m: any) => error.issues[m].message as string
    );
    return fieldErrors.join(". ");
    // console.log(fieldErrors.join(". "));
  } else if (
    error.name === "PrismaClientKnownRequestError" &&
    error.code === "P2002"
  ) {
    //handle prisma error
    const field = error.meta?.target ? error.meta.target[0] : "Field";
    return `${field.charAt(0).toUpperCase() + field.slice(1)} already exist`;
  } else {
    // Handle other errors
    return typeof error.message === "string"
      ? error.message
      : JSON.stringify(error.message);
  }
}
