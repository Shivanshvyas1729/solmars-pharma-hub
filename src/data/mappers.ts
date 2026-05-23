import { z } from "zod";
import * as schemas from "./schemas";

// Domain Types
export type Hero = z.infer<typeof schemas.HeroSchema>;
export type ContentBlock = z.infer<typeof schemas.ContentBlockSchema>;
export type Cta = z.infer<typeof schemas.CtaSchema>;

export type HomePageData = z.infer<typeof schemas.HomePageSchema>;
export type AboutPageData = z.infer<typeof schemas.AboutPageSchema>;
export type QualityPageData = z.infer<typeof schemas.QualityPageSchema>;
export type ContactPageData = z.infer<typeof schemas.ContactPageSchema>;
export type ServicesPageData = z.infer<typeof schemas.ServicesPageSchema>;
export type CareersPageData = z.infer<typeof schemas.CareersPageSchema>;
export type DownloadsPageData = z.infer<typeof schemas.DownloadsPageSchema>;

export function mapHomePage(data: HomePageData): HomePageData {
  return data;
}

export function mapAboutPage(data: AboutPageData): AboutPageData {
  return data;
}

export function mapQualityPage(data: QualityPageData): QualityPageData {
  return data;
}

export function mapContactPage(data: ContactPageData): ContactPageData {
  return data;
}

export function mapServicesPage(data: ServicesPageData): ServicesPageData {
  return data;
}

export function mapCareersPage(data: CareersPageData): CareersPageData {
  return data;
}

export function mapDownloadsPage(data: DownloadsPageData): DownloadsPageData {
  return data;
}

export type Product = z.infer<typeof schemas.ProductSchema>;
export type ProductCategory = z.infer<typeof schemas.ProductCategorySchema>;

export function mapProduct(data: Product): Product {
  return data;
}
