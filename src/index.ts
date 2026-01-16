export interface HelloOptions {
  name?: string;
}

export function hello(options: HelloOptions = {}): string {
  const name = options.name ?? "world";
  return `Hello, ${name}!`;
}

