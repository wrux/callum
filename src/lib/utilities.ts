import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function kebabToCamelCase(str: string) {
  return str.replace(/-./g, (match) => match[1].toUpperCase());
}
