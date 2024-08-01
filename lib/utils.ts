import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: Date, format: string): string => {
  format = format.replace(/YYYY/, date.getFullYear().toString());
  format = format.replace(
    /MM/,
    (date.getMonth() + 1).toString().padStart(2, "0"),
  );
  format = format.replace(/DD/, date.getDate().toString().padStart(2, "0"));

  return format;
};
