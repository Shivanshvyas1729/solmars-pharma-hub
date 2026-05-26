import heroLab from "@/assets/hero-lab.jpg";
import research from "@/assets/research.jpg";
import products from "@/assets/products.jpg";
import team from "@/assets/team.jpg";
import servicesSplit from "@/assets/services-split.png";
import careersSplit from "@/assets/careers-split.png";

// Asset registry — YAML references images by key, mapped to bundled URLs here.
// To add a new image: place file in src/assets/, import above, add entry below.
export const assets: Record<string, string> = {
  "hero-lab": heroLab,
  research,
  products,
  team,
  "services-split": servicesSplit,
  "careers-split": careersSplit,
};

export function resolveAsset(key?: string): string | undefined {
  if (!key) return undefined;
  return assets[key] ?? key; // fall through: allow raw URLs too
}
