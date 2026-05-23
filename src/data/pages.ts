import { getCmsData } from "@/api/cms";
import { PagesConfigSchema, PagesConfig } from "./schemas";
import { formatZodErrors } from "@/lib/zod-error";
import * as mappers from "./mappers";

let pagesCache: PagesConfig | null = null;

async function loadAndValidatePages(): Promise<PagesConfig> {
  const raw = await getCmsData({ data: "pages.yaml" });
  
  // Migration support
  let dataToParse = raw;
  if (dataToParse.version === 1) {
    // Future: dataToParse = migrateV1ToV2(dataToParse);
  }

  const result = PagesConfigSchema.safeParse(dataToParse);
  if (!result.success) {
    throw new Error(`Pages configuration error:\n${formatZodErrors(result.error)}`);
  }
  
  return result.data;
}

export async function getPagesConfig(): Promise<PagesConfig> {
  return await loadAndValidatePages();
}

export async function getHomePageData() {
  const config = await getPagesConfig();
  if (!config.pages.home) throw new Error("Home page configuration is missing in pages.yaml");
  return mappers.mapHomePage(config.pages.home);
}

export async function getAboutPageData() {
  const config = await getPagesConfig();
  if (!config.pages.about) throw new Error("About page configuration is missing in pages.yaml");
  return mappers.mapAboutPage(config.pages.about);
}

export async function getQualityPageData() {
  const config = await getPagesConfig();
  if (!config.pages.quality) throw new Error("Quality page configuration is missing in pages.yaml");
  return mappers.mapQualityPage(config.pages.quality);
}

export async function getContactPageData() {
  const config = await getPagesConfig();
  if (!config.pages.contact) throw new Error("Contact page configuration is missing in pages.yaml");
  return mappers.mapContactPage(config.pages.contact);
}

export async function getServicesPageData() {
  const config = await getPagesConfig();
  if (!config.pages.services) throw new Error("Services page configuration is missing in pages.yaml");
  return mappers.mapServicesPage(config.pages.services);
}

export async function getCareersPageData() {
  const config = await getPagesConfig();
  if (!config.pages.careers) throw new Error("Careers page configuration is missing in pages.yaml");
  return mappers.mapCareersPage(config.pages.careers);
}

export async function getDownloadsPageData() {
  const config = await getPagesConfig();
  if (!config.pages.downloads) throw new Error("Downloads page configuration is missing in pages.yaml");
  return mappers.mapDownloadsPage(config.pages.downloads);
}

