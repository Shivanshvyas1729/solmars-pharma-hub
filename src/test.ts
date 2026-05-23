import { createServerFn } from '@tanstack/react-start';

export const testFn = createServerFn({ method: "GET" })
  .handler(async (ctx) => { 
    const data = ctx.data as unknown as string;
    return "ok" + data; 
  });
