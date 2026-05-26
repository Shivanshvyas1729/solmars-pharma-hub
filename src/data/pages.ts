import { loadPage } from "@/lib/content/loader";

export async function getHomePageData() {
  return loadPage("home");
}

export async function getAboutPageData() {
  return loadPage("about");
}

export async function getQualityPageData() {
  return loadPage("quality");
}

export async function getContactPageData() {
  return loadPage("contact");
}

export async function getServicesPageData() {
  return loadPage("services");
}

export async function getCareersPageData() {
  return loadPage("careers");
}

export async function getDownloadsPageData() {
  return loadPage("downloads");
}
