import { describe, it, expect } from "vitest";
import { HomePageSchema, ProductSchema } from "./schemas";
import { formatZodErrors } from "@/lib/zod-error";

describe("Zod Schemas", () => {
  describe("HomePageSchema", () => {
    it("throws error for missing required fields", () => {
      const invalidData = {
        hero: {
          subtitle: "Just a subtitle",
        },
      };

      const result = HomePageSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        const errorMsg = formatZodErrors(result.error);
        expect(errorMsg).toContain("hero.title is required");
      }
    });

    it("applies default values for optional fields", () => {
      const validData = {
        hero: {
          title: "My Title",
        },
      };

      const result = HomePageSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.hero.subtitle).toBe("");
        expect(result.data.hero.image).toBe("");
        expect(result.data.features).toEqual([]);
      }
    });
  });

  describe("ProductSchema", () => {
    it("throws error for missing slug or name", () => {
      const result = ProductSchema.safeParse({
        category: "Antibiotics",
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        const errorMsg = formatZodErrors(result.error);
        expect(errorMsg).toContain("product.slug is required");
        expect(errorMsg).toContain("product.name is required");
      }
    });

    it("applies defaults for missing descriptive fields", () => {
      const result = ProductSchema.safeParse({
        slug: "test-product",
        name: "Test Product",
        category: "Antibiotics",
      });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.description).toBe("");
        expect(result.data.benefits).toEqual([]);
      }
    });
  });
});
