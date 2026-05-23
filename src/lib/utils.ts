import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const IS_GITHUB_PAGES = import.meta.env.VITE_GITHUB_PAGES === "true";
export const APP_BASE_PATH = import.meta.env.BASE_URL ?? "/";

export function resolveAppUrl(path: string): string {
  if (/^(https?:)?\/\//.test(path)) return path;
  const normalizedPath = path.replace(/^\/+/, "");
  const base = APP_BASE_PATH.endsWith("/") ? APP_BASE_PATH : `${APP_BASE_PATH}/`;
  if (IS_GITHUB_PAGES) {
    const hashPath = normalizedPath === "" ? "#/" : `#/${normalizedPath}`;
    return `${base}${hashPath}`;
  }
  return `${base}${normalizedPath}`;
}

export function resolvePublicPath(path: string): string {
  if (!path) return APP_BASE_PATH;
  if (/^(https?:)?\/\//.test(path)) return path;
  const normalizedPath = path.replace(/^\/+/, "");
  const base = APP_BASE_PATH.endsWith("/") ? APP_BASE_PATH : `${APP_BASE_PATH}/`;
  return `${base}${normalizedPath}`;
}
