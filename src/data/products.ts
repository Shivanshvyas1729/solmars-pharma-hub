import yaml from "js-yaml";
import productsRaw from "@/content/products.yaml?raw";
import { ProductsConfigSchema, ProductsConfig } from "./schemas";
import { formatZodErrors } from "@/lib/zod-error";
import { mapProduct, Product, ProductCategory } from "./mappers";

export { type Product, type ProductCategory };

export const productCategories: ProductCategory[] = [
  "Antibiotics",
  "Pain Management",
  "Orthopedic Care",
  "Nutritional Supplements",
  "Neurology",
  "General Healthcare",
];

let productsCache: ProductsConfig | null = null;

function loadAndValidateProducts(): ProductsConfig {
  if (productsCache) return productsCache;

  try {
    const raw = yaml.load(productsRaw);
    const result = ProductsConfigSchema.safeParse(raw);
    if (!result.success) {
      throw new Error(`Products configuration error:\n${formatZodErrors(result.error)}`);
    }
    productsCache = result.data;
    return productsCache;
  } catch (error) {
    console.error("Failed to parse and validate products.yaml:", error);
    throw error;
  }
}

export async function getProductsConfig(): Promise<ProductsConfig> {
  return loadAndValidateProducts();
}

export async function getProducts(): Promise<Product[]> {
  const config = await getProductsConfig();
  if (config.version === 2 && config.categories) {
    return config.categories.flatMap((c) => 
      c.products.map((p) => {
        const prod = { ...p, category: c.categoryName };
        return mapProduct(prod);
      })
    );
  }
  return config.products.map(mapProduct);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((p) => p.slug === slug);
}

export async function getRelatedProducts(slug: string, limit = 3): Promise<Product[]> {
  const products = await getProducts();
  const current = products.find((p) => p.slug === slug);
  if (!current) return [];
  return products
    .filter((p) => p.slug !== slug && p.category === current.category)
    .slice(0, limit);
}
