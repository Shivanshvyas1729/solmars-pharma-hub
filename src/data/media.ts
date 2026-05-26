import yaml from "js-yaml";
import mediaRaw from "@/content/media-config.yaml?raw";
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

function loadAndValidateMedia(): MediaConfig {
  if (mediaCache) return mediaCache;

  try {
    const raw = yaml.load(mediaRaw);
    const result = MediaConfigSchema.safeParse(raw);
    if (!result.success) {
      throw new Error(`Media configuration error:\n${formatZodErrors(result.error)}`);
    }
    mediaCache = normalizeMediaConfig(result.data);
    return mediaCache;
  } catch (error) {
    console.error("Failed to parse and validate media-config.yaml:", error);
    throw error;
  }
}

export async function getMediaConfig(): Promise<MediaConfig> {
  return loadAndValidateMedia();
}
