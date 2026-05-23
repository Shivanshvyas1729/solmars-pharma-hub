import { createServerFn } from '@tanstack/react-start';
import { readYaml, writeYaml } from '../lib/cms/yaml-parser';

export const getCmsData = createServerFn({ method: "GET" })
  .inputValidator((d: string) => d)
  .handler(async (ctx: any): Promise<any> => {
    const filename = ctx.data;
    const data = await readYaml(filename);
    return data || {};
  });

// @ts-ignore: Bypassing strict ServerFnBuilder typing for generic CMS payloads
export const saveCmsData = createServerFn({ method: "POST" })
  .handler(async (ctx: any) => {
    const payload = ctx.data as { filename: string, data: any };
    const success = await writeYaml(payload.filename, payload.data);
    if (!success) {
      throw new Error(`Failed to save ${payload.filename}`);
    }
    return { success: true };
  });
