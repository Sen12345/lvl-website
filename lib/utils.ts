import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
