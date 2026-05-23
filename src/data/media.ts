import { getCmsData } from "@/api/cms";
import { MediaConfigSchema, MediaConfig } from "./schemas";
import { formatZodErrors } from "@/lib/zod-error";

let mediaCache: MediaConfig | null = null;

async function loadAndValidateMedia(): Promise<MediaConfig> {
  const raw = await getCmsData({ data: "media-config.yaml" });

  const result = MediaConfigSchema.safeParse(raw);
  if (!result.success) {
    throw new Error(`Media configuration error:\n${formatZodErrors(result.error)}`);
  }

  return result.data;
}

export async function getMediaConfig(): Promise<MediaConfig> {
  return await loadAndValidateMedia();
}
