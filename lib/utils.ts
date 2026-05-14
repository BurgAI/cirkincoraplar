import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function withBasePath(src: string) {
  if (!src.startsWith("/")) {
    return src;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!basePath || src.startsWith(`${basePath}/`)) {
    return src;
  }

  return `${basePath}${src}`;
}
