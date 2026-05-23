import { getCmsData } from "@/api/cms";
import { resolvePublicPath } from "@/lib/utils";
import { MediaConfigSchema, MediaConfig } from "./schemas";
import { formatZodErrors } from "@/lib/zod-error";

let mediaCache: MediaConfig | null = null;

function normalizeMediaConfig(media: MediaConfig): MediaConfig {
  return {
    ...media,
    logo: resolvePublicPath(media.logo),
    hero_image: resolvePublicPath(media.hero_image),
    videos: media.videos.map((video) => ({
      ...video,
      url: resolvePublicPath(video.url),
    })),
    banners: media.banners.map((banner) => ({
      ...banner,
      image: resolvePublicPath(banner.image),
    })),
    gallery: media.gallery.map((item) => ({
      ...item,
      image: resolvePublicPath(item.image),
    })),
  };
}

async function loadAndValidateMedia(): Promise<MediaConfig> {
  const raw = await getCmsData({ data: "media-config.yaml" });

  const result = MediaConfigSchema.safeParse(raw);
  if (!result.success) {
    throw new Error(`Media configuration error:\n${formatZodErrors(result.error)}`);
  }

  return normalizeMediaConfig(result.data);
}

export async function getMediaConfig(): Promise<MediaConfig> {
  if (mediaCache) return mediaCache;
  mediaCache = await loadAndValidateMedia();
  return mediaCache;
}
