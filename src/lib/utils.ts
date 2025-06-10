import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isValidBase64(str: string) {
  try {
    // 检查字符串是否只包含合法的 base64 字符
    return /^[A-Za-z0-9+/]*={0,2}$/.test(str);
  } catch (e) {
    return false;
  }
}