export type ProductCategory =
  | "Antibiotics"
  | "Orthopedic Care"
  | "Neurology"
  | "Pain Management"
  | "Nutritional Supplements"
  | "General Healthcare";

export interface Product {
  slug: string;
  name: string;
  shortName?: string;
  category: ProductCategory;
  segment: string;
  dosageForm: string;
  packaging: string;
  composition: string;
  description: string;
  therapeuticUse: string;
  benefits: string[];
  usage: string;
  storage: string;
  safety: string;
}

export const products: Product[] = [
  {
    slug: "tesmol-mr",
    name: "Tesmol MR Tablets",
    shortName: "Tesmol MR",
    category: "Pain Management",
    segment: "Musculoskeletal Pain",
    dosageForm: "Tablets",
    packaging: "10 x 10 Tablets (Alu-Alu)",
    composition: "Etoricoxib 60mg + Thiocolchicoside 4mg",
    description:
      "A combination tablet indicated for acute musculoskeletal pain and inflammation associated with muscle spasm.",
    therapeuticUse:
      "Used in management of acute lower back pain, neck pain and post-operative musculoskeletal conditions.",
    benefits: [
      "Combined anti-inflammatory and muscle relaxant action",
      "Effective in acute spasm and joint pain",
      "Once-daily convenient dosing",
    ],
    usage: "As directed by a registered medical practitioner. Typically one tablet daily after meals.",
    storage: "Store below 25°C in a dry place, protected from light and moisture.",
    safety: "Not recommended during pregnancy, lactation, or in patients with cardiovascular disorders without medical supervision.",
  },
  {
    slug: "bindfrac",
    name: "Bindfrac Capsules",
    shortName: "Bindfrac",
    category: "Orthopedic Care",
    segment: "Bone & Joint Health",
    dosageForm: "Capsules",
    packaging: "10 x 10 Capsules",
    composition: "Cissus Quadrangularis Extract 500mg",
    description:
      "Plant-based formulation supporting bone healing, fracture recovery and joint care.",
    therapeuticUse:
      "Supportive therapy in fracture management, osteoporosis and orthopedic recovery.",
    benefits: [
      "Aids natural bone repair",
      "Supports calcium absorption",
      "Well-tolerated long-term use",
    ],
    usage: "One capsule twice daily or as directed by the physician.",
    storage: "Store in a cool, dry place away from direct sunlight.",
    safety: "Consult a physician before use in pregnancy or if on other supplements.",
  },
  {
    slug: "limemax-od",
    name: "Limemax-OD Tablets",
    shortName: "Limemax-OD",
    category: "Nutritional Supplements",
    segment: "Bone Nutrition",
    dosageForm: "Tablets",
    packaging: "10 x 10 Tablets",
    composition: "Calcium Citrate Maleate 1000mg + Vitamin D3 + Folic Acid",
    description:
      "Once-daily calcium supplement designed for adult bone health and pre-natal calcium support.",
    therapeuticUse: "Calcium deficiency, osteopenia, pregnancy and lactation support.",
    benefits: [
      "High bioavailability calcium",
      "Combined with Vitamin D3 for absorption",
      "Once-daily compliance",
    ],
    usage: "One tablet daily, preferably after a meal.",
    storage: "Store below 25°C, protected from moisture.",
    safety: "Avoid concurrent use with antacids. Consult physician in renal disorders.",
  },
  {
    slug: "hopemax",
    name: "Hopemax Tablets",
    shortName: "Hopemax",
    category: "Nutritional Supplements",
    segment: "General Wellness",
    dosageForm: "Tablets",
    packaging: "10 x 10 Tablets",
    composition: "Multivitamin, Multimineral & Antioxidant Tablets",
    description:
      "Comprehensive daily multivitamin formula supporting energy, immunity and overall wellness.",
    therapeuticUse: "Nutritional deficiency, convalescence and general wellness support.",
    benefits: [
      "Supports daily energy levels",
      "Strengthens immune response",
      "Balanced micronutrient profile",
    ],
    usage: "One tablet daily after breakfast.",
    storage: "Store in a cool, dry place.",
    safety: "For adults. Keep out of reach of children.",
  },
  {
    slug: "bindfrac-syrup",
    name: "Bindfrac Syrup",
    shortName: "Bindfrac Syrup",
    category: "Orthopedic Care",
    segment: "Pediatric Bone Health",
    dosageForm: "Oral Syrup",
    packaging: "200 ml bottle",
    composition: "Cissus Quadrangularis Extract with Arginine",
    description: "Palatable liquid formulation supporting bone development and recovery in children.",
    therapeuticUse: "Adjunct therapy in pediatric fracture care and bone density support.",
    benefits: ["Easy pediatric dosing", "Pleasant flavor profile", "Supports growth and recovery"],
    usage: "5–10 ml twice daily or as directed by the physician.",
    storage: "Store below 30°C. Do not refrigerate. Shake well before use.",
    safety: "Use under medical supervision in children below 5 years.",
  },
  {
    slug: "limemax-plus",
    name: "Limemax Plus Tablets",
    shortName: "Limemax Plus",
    category: "Nutritional Supplements",
    segment: "Bone & Joint Nutrition",
    dosageForm: "Tablets",
    packaging: "10 x 10 Tablets",
    composition: "Calcium Citrate Maleate + Vitamin K2-7 + Methylcobalamin + Vitamin D3",
    description:
      "Advanced calcium formulation enriched with Vitamin K2-7 for directed bone mineralisation.",
    therapeuticUse: "Osteoporosis management, post-menopausal bone health and joint care.",
    benefits: ["Directs calcium to bones", "Supports nerve health", "Comprehensive bone formula"],
    usage: "One tablet daily after meals.",
    storage: "Store below 25°C, away from sunlight.",
    safety: "Consult physician in patients on anticoagulants.",
  },
  {
    slug: "limemax-hd",
    name: "Limemax HD Tablets",
    shortName: "Limemax HD",
    category: "Nutritional Supplements",
    segment: "Advanced Bone Care",
    dosageForm: "Tablets",
    packaging: "10 x 10 Tablets",
    composition: "Calcium Citrate Malate + Methylcobalamin + Vitamin D3 + Vitamin K2-7 + Magnesium + Zinc",
    description:
      "High-density bone health formula combining calcium with key vitamins and trace minerals.",
    therapeuticUse: "Osteoporosis, deficiency states and orthopedic post-surgical nutrition.",
    benefits: ["Synergistic mineral blend", "Supports bone remodeling", "Enhanced absorption"],
    usage: "One tablet daily, preferably after a meal.",
    storage: "Store below 25°C in a dry place.",
    safety: "Use under medical guidance during pregnancy.",
  },
  {
    slug: "enzosol-plus",
    name: "Enzosol Plus Tablets",
    shortName: "Enzosol Plus",
    category: "Pain Management",
    segment: "Anti-inflammatory Enzymes",
    dosageForm: "Tablets",
    packaging: "10 x 10 Tablets",
    composition: "Trypsin + Bromelain + Rutoside Trihydrate + Aceclofenac",
    description:
      "Enzyme-based anti-inflammatory tablet for soft-tissue inflammation, edema and post-operative recovery.",
    therapeuticUse: "Post-surgical inflammation, sprains, sports injuries and soft tissue trauma.",
    benefits: ["Reduces inflammation and edema", "Supports faster recovery", "Combined enzyme and NSAID action"],
    usage: "One tablet twice daily after meals.",
    storage: "Store below 25°C, away from moisture.",
    safety: "Avoid in active peptic ulcer disease. Use cautiously in renal impairment.",
  },
  {
    slug: "pregazex-plus",
    name: "Pregazex Plus Tablets",
    shortName: "Pregazex Plus",
    category: "Neurology",
    segment: "Neuropathic Pain",
    dosageForm: "Tablets",
    packaging: "10 x 10 Tablets",
    composition: "Pregabalin + Nortriptyline Hydrochloride + Methylcobalamin",
    description: "Comprehensive therapy for neuropathic pain with neuroprotective support.",
    therapeuticUse:
      "Diabetic neuropathy, post-herpetic neuralgia and other chronic neuropathic conditions.",
    benefits: ["Effective neuropathic pain relief", "Supports nerve regeneration", "Improves sleep quality"],
    usage: "As prescribed; typically one tablet at bedtime.",
    storage: "Store below 25°C, protected from light.",
    safety: "Do not stop abruptly. Avoid driving until response is established.",
  },
  {
    slug: "pregazex-sr",
    name: "Pregazex SR Tablets",
    shortName: "Pregazex SR",
    category: "Neurology",
    segment: "Sustained Release Neurology",
    dosageForm: "Sustained Release Tablets",
    packaging: "10 x 10 Tablets",
    composition: "Pregabalin (SR) 75mg + Methylcobalamin 1500mcg",
    description: "Sustained release formulation providing extended neuropathic pain control.",
    therapeuticUse: "Chronic neuropathic pain, fibromyalgia and diabetic neuropathy.",
    benefits: ["Extended-release pain control", "Once-daily dosing", "Improved compliance"],
    usage: "One tablet at bedtime or as directed.",
    storage: "Store below 25°C in a dry place.",
    safety: "Swallow whole — do not crush or chew. Caution in renal impairment.",
  },
  {
    slug: "softrab-dsr",
    name: "Softrab-DSR Capsules",
    shortName: "Softrab DSR",
    category: "General Healthcare",
    segment: "Gastrointestinal Care",
    dosageForm: "Sustained Release Capsules",
    packaging: "10 x 10 Capsules",
    composition: "Rabeprazole Sodium (Enteric Coated) 20mg + Domperidone (SR) 30mg",
    description:
      "Effective acid suppression combined with prokinetic action for symptomatic GERD and dyspepsia.",
    therapeuticUse: "GERD, acid reflux, non-ulcer dyspepsia and gastritis.",
    benefits: ["Rapid acid control", "Reduces bloating and nausea", "Sustained symptom relief"],
    usage: "One capsule daily before breakfast.",
    storage: "Store below 25°C, protected from moisture.",
    safety: "Long-term use should be under medical supervision.",
  },
  {
    slug: "tesmol-relax",
    name: "Tesmol Relax Gel",
    shortName: "Tesmol Relax",
    category: "Pain Management",
    segment: "Topical Analgesic",
    dosageForm: "Topical Gel",
    packaging: "30 g tube",
    composition: "Diclofenac + Methyl Salicylate + Menthol + Linseed Oil + Capsaicin",
    description:
      "Multi-action topical gel providing rapid relief from muscular and joint pain.",
    therapeuticUse: "Sprains, sports injuries, joint stiffness and localized musculoskeletal pain.",
    benefits: ["Fast topical action", "Non-greasy formulation", "Cooling and soothing effect"],
    usage: "Apply gently on the affected area 2–3 times a day.",
    storage: "Store below 25°C, away from heat and flame.",
    safety: "For external use only. Avoid contact with eyes and broken skin.",
  },
  {
    slug: "hopemax-12g",
    name: "Hopemax-12G Tablets",
    shortName: "Hopemax-12G",
    category: "Nutritional Supplements",
    segment: "Antioxidant & Energy",
    dosageForm: "Tablets",
    packaging: "10 x 10 Tablets",
    composition:
      "Lycopene, Green Tea Extract, Green Coffee Extract, Ginseng, Omega-3, Multivitamins & Multiminerals",
    description:
      "Premium antioxidant and energy formula supporting vitality, recovery and cellular health.",
    therapeuticUse:
      "Adjunct therapy in fatigue, oxidative stress and convalescence.",
    benefits: ["Powerful antioxidant blend", "Boosts stamina and energy", "Supports cardiovascular wellness"],
    usage: "One tablet daily after breakfast.",
    storage: "Store in a cool, dry place.",
    safety: "Not recommended for children. Consult physician if on blood thinners.",
  },
  {
    slug: "tesmol-90",
    name: "Tesmol-90 Tablets",
    shortName: "Tesmol-90",
    category: "Pain Management",
    segment: "Acute Pain",
    dosageForm: "Tablets",
    packaging: "10 x 10 Tablets",
    composition: "Etoricoxib 90mg",
    description:
      "Selective COX-2 inhibitor for management of acute and chronic inflammatory pain.",
    therapeuticUse: "Osteoarthritis, rheumatoid arthritis, gout and acute musculoskeletal pain.",
    benefits: ["Strong anti-inflammatory action", "Once-daily dosing", "Reduced GI burden vs traditional NSAIDs"],
    usage: "One tablet daily, with or without food.",
    storage: "Store below 25°C, protected from moisture.",
    safety: "Use with caution in hypertension and cardiac disease.",
  },
  {
    slug: "bindfrac-total",
    name: "Bindfrac Total Capsules",
    shortName: "Bindfrac Total",
    category: "Orthopedic Care",
    segment: "Comprehensive Bone Care",
    dosageForm: "Capsules",
    packaging: "10 x 10 Capsules",
    composition: "Cissus Quadrangularis + Calcium + Vitamin D3 + Methylcobalamin",
    description:
      "Complete bone-care formulation combining traditional and modern nutrients for recovery.",
    therapeuticUse: "Fracture healing, osteopenia and long-term bone health.",
    benefits: ["All-in-one bone formula", "Supports faster recovery", "Improves bone density"],
    usage: "One capsule twice daily after meals.",
    storage: "Store below 25°C in a dry place.",
    safety: "Consult a physician before use in pregnancy.",
  },
  {
    slug: "safewalk-c",
    name: "Safewalk-C Tablets",
    shortName: "Safewalk-C",
    category: "Orthopedic Care",
    segment: "Joint & Cartilage Care",
    dosageForm: "Tablets",
    packaging: "10 x 10 Tablets",
    composition:
      "Rosehip Extract, L-Arginine, Vitamin C, Devil's Claw Extract, Boswellia Serrata, Collagen Type II",
    description:
      "Premium joint-care formulation combining cartilage builders with anti-inflammatory botanicals.",
    therapeuticUse: "Osteoarthritis, joint stiffness and cartilage support.",
    benefits: ["Supports joint mobility", "Plant-based anti-inflammatory action", "Promotes cartilage repair"],
    usage: "One tablet daily after meals.",
    storage: "Store below 25°C in a dry place.",
    safety: "Consult physician if pregnant or on anticoagulants.",
  },
];

export const productCategories: ProductCategory[] = [
  "Antibiotics",
  "Pain Management",
  "Orthopedic Care",
  "Nutritional Supplements",
  "Neurology",
  "General Healthcare",
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 3): Product[] {
  const current = getProductBySlug(slug);
  if (!current) return [];
  return products
    .filter((p) => p.slug !== slug && p.category === current.category)
    .slice(0, limit);
}
