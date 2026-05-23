import { z } from "zod";

export const HeroSchema = z.object({
  title: z.string({ required_error: "hero.title is required" }),
  subtitle: z.string().default(""),
  image: z.string().default(""),
  ctaPrimary: z.object({ label: z.string(), url: z.string() }).default({ label: "", url: "" }),
  ctaSecondary: z.object({ label: z.string(), url: z.string() }).default({ label: "", url: "" }),
});

export const ContentBlockSchema = z.object({
  title: z.string({ required_error: "title is required" }),
  content: z.string().default(""),
});

export const CtaSchema = z.object({
  heading: z.string({ required_error: "cta.heading is required" }),
  content: z.string().default(""),
  button: z.object({
    label: z.string().default(""),
    url: z.string().default(""),
  }).default({ label: "", url: "" }),
});

export const HomePageSchema = z.object({
  hero: HeroSchema,
  features: z.array(ContentBlockSchema).default([
    { title: "Quality First", content: "Our manufacturing process adheres to the highest global standards." },
    { title: "Global Reach", content: "Delivering health solutions across continents." },
    { title: "R&D Focus", content: "Continuously innovating for a healthier future." }
  ]),
  updates: z.object({
    heading: z.string().default("Latest Updates"),
    content: z.string().default("Stay tuned for our latest product releases and health news."),
  }).default({ heading: "Latest Updates", content: "Stay tuned for our latest product releases and health news." }),
});

export const AboutPageSchema = z.object({
  hero: HeroSchema,
  story: z.object({
    title: z.string().default("Our story"),
    content1: z.string().default("Founded with a singular purpose — to make quality medicines accessible to all — Solmars Pharma has grown into a trusted name in pharmaceutical formulations, generic medicines and healthcare products. Our work is guided by science, sharpened by experience, and inspired by the patients we serve."),
    content2: z.string().default("We collaborate with doctors, distributors and institutions to bring dependable therapies to communities across India and beyond, while building a scalable foundation for the next chapter of our growth."),
  }).default({
    title: "Our story",
    content1: "Founded with a singular purpose — to make quality medicines accessible to all — Solmars Pharma has grown into a trusted name in pharmaceutical formulations, generic medicines and healthcare products. Our work is guided by science, sharpened by experience, and inspired by the patients we serve.",
    content2: "We collaborate with doctors, distributors and institutions to bring dependable therapies to communities across India and beyond, while building a scalable foundation for the next chapter of our growth."
  }),
  values_heading: z.string().default("Mission, vision and values"),
  values: z.array(ContentBlockSchema).default([
    { title: "Mission", content: "To deliver high-quality, affordable pharmaceutical solutions that improve patient outcomes and strengthen healthcare access." },
    { title: "Vision", content: "To be a trusted pharmaceutical partner advancing healthcare for communities across India and the world." },
    { title: "Values", content: "Integrity, scientific rigor, patient-first thinking, and an unwavering commitment to quality and compliance." },
    { title: "Commitment", content: "We honor our responsibility to doctors, distributors, hospitals and patients with consistent, ethical practice." }
  ]),
  pillars: z.array(ContentBlockSchema).default([
    { title: "Market presence", content: "Active distribution and partnerships across major Indian states with a growing international footprint." },
    { title: "Leadership philosophy", content: "Disciplined operations, ethical decision-making and an open culture of accountability." },
    { title: "Future growth", content: "Expanding therapeutic depth, manufacturing capability and digital infrastructure for tomorrow." }
  ]),
});

export const QualityPageSchema = z.object({
  hero: HeroSchema,
  story: z.object({
    title: z.string().default("A quality-first manufacturing culture"),
    content1: z.string().default("From raw material sourcing to finished-goods release, our processes are designed for repeatable quality. We maintain rigorous documentation, controlled environments and a compliance-first mindset across every formulation."),
    content2: z.string().default("Our research approach focuses on clinically relevant formulations — built to meet real-world patient needs and prescribing realities for healthcare professionals."),
  }).default({
    title: "A quality-first manufacturing culture",
    content1: "From raw material sourcing to finished-goods release, our processes are designed for repeatable quality. We maintain rigorous documentation, controlled environments and a compliance-first mindset across every formulation.",
    content2: "Our research approach focuses on clinically relevant formulations — built to meet real-world patient needs and prescribing realities for healthcare professionals."
  }),
  pillars_heading: z.string().default("Six commitments behind every product"),
  pillars: z.array(ContentBlockSchema).default([
    { title: "Quality Assurance", content: "Multi-stage QA framework covering raw material qualification, in-process checks and finished-product release." },
    { title: "Manufacturing Standards", content: "GMP-aligned facilities and processes designed for consistency, safety and traceability." },
    { title: "Compliance", content: "Documentation, batch records and regulatory alignment built into every operation." },
    { title: "Research Philosophy", content: "Evidence-led formulation work centered on patient outcomes and clinical relevance." },
    { title: "Safety Commitment", content: "Stability, bioequivalence and pharmacovigilance practices that put patient safety first." },
    { title: "Continuous Improvement", content: "Investment in technology, training and audits to raise our standards every year." }
  ]),
  certifications: z.object({
    title: z.string().default("Building toward globally recognized standards"),
    content: z.string().default("We continuously invest in audits, accreditations and certifications to strengthen confidence for our partners, regulators and patients."),
  }).default({ title: "Building toward globally recognized standards", content: "We continuously invest in audits, accreditations and certifications to strengthen confidence for our partners, regulators and patients." }),
});

export const ContactPageSchema = z.object({
  hero: HeroSchema,
  office: z.object({
    title: z.string().default("Head Office"),
    location: z.string().default(""),
  }).default({ title: "Head Office", location: "" }),
  email: z.object({
    title: z.string().default("Email"),
    address: z.string().default(""),
  }).default({ title: "Email", address: "" }),
  phone: z.object({
    title: z.string().default("Phone"),
    number: z.string().default(""),
  }).default({ title: "Phone", number: "" }),
});

export const ServicesPageSchema = z.object({
  hero: HeroSchema,
  items: z.array(ContentBlockSchema).default([]),
  cta: CtaSchema.default({ heading: "", content: "", button: { label: "", url: "" } }),
});

export const CareersPageSchema = z.object({
  hero: HeroSchema,
  culture: z.array(ContentBlockSchema).default([]),
  open_roles: z.object({ heading: z.string().default(""), content: z.string().default("") }).default({ heading: "", content: "" }),
  apply: CtaSchema.default({ heading: "", content: "", button: { label: "", url: "" } }),
});

export const DownloadsPageSchema = z.object({
  hero: HeroSchema,
  docs: z.array(z.object({
    title: z.string({ required_error: "doc.title is required" }),
    desc: z.string().default(""),
    size: z.string().default(""),
  })).default([]),
});

export const PagesConfigSchema = z.object({
  version: z.number().default(1),
  pages: z.object({
    home: HomePageSchema.optional(),
    about: AboutPageSchema.optional(),
    quality: QualityPageSchema.optional(),
    contact: ContactPageSchema.optional(),
    services: ServicesPageSchema.optional(),
    careers: CareersPageSchema.optional(),
    downloads: DownloadsPageSchema.optional(),
  }),
});

export type PagesConfig = z.infer<typeof PagesConfigSchema>;

export const ProductCategorySchema = z.enum([
  "Antibiotics",
  "Orthopedic Care",
  "Neurology",
  "Pain Management",
  "Nutritional Supplements",
  "General Healthcare",
]);

export const ProductSchema = z.object({
  slug: z.string({ required_error: "product.slug is required" }),
  name: z.string({ required_error: "product.name is required" }),
  shortName: z.string().optional(),
  category: ProductCategorySchema.optional(), // Make optional since it's inferred from group
  image: z.string().default(""),
  segment: z.string().default(""),
  dosageForm: z.string().default(""),
  packaging: z.string().default(""),
  composition: z.string().default(""),
  description: z.string().default(""),
  therapeuticUse: z.string().default(""),
  benefits: z.array(z.string()).default([]),
  usage: z.string().default(""),
  storage: z.string().default(""),
  safety: z.string().default(""),
});

export const ProductCategoryGroupSchema = z.object({
  categoryName: ProductCategorySchema,
  products: z.array(ProductSchema).default([]),
});

export const ProductsConfigSchema = z.object({
  version: z.number().default(2),
  products: z.array(ProductSchema).default([]), // For backwards compatibility if needed, but not primarily used in V2
  categories: z.array(ProductCategoryGroupSchema).default([]),
});

export type ProductsConfig = z.infer<typeof ProductsConfigSchema>;

export const MediaConfigSchema = z.object({
  logo: z.string().default(""),
  hero_image: z.string().default(""),
  videos: z.array(z.object({ title: z.string(), url: z.string() })).default([]),
  banners: z.array(z.object({ title: z.string(), image: z.string() })).default([]),
  gallery: z.array(z.object({ title: z.string(), image: z.string() })).default([]),
  social_links: z.array(z.object({ name: z.string(), url: z.string() })).default([]),
});

export type MediaConfig = z.infer<typeof MediaConfigSchema>;

