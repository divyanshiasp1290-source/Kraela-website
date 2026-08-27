import refinedSunflowerOil from "@/assets/Refined-Sunflower-Oil.png";
import mustardOil from "@/assets/product-mustard-oil.jpg";
import coldPressedMustardOil from "@/assets/Cold-Pressed-Mustard-Oil.png";

/**
 * EDITABLE PLACEHOLDER CONTENT.
 * All copy below is illustrative and should be replaced with verified
 * company information before going live.
 */

export const company = {
  name: "Kraela",
  legalName: "Kraela International",
  tagline: "Refined edible oils & oilseeds for global buyers",
  email: "sales@example.com",
  phone: "+48 517 348 544",
  whatsapp: "+48 517 348 544",
  address: "Registered office address — ul. Sielecka 67/69 lok. 4, 00-738 Warszawa, Poland",
};

export type ProductSpec = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  category: string;
  range: "Sunflower Oil" | "Specialty Oils" | "Agri Commodities";
  badge: string;
  code: string;
  image: string;
  summary: string;
  description: string;
  specs: ProductSpec[];
  packaging: string[];
  applications: string[];
};

export const products: Product[] = [
  {
    slug: "refined-sunflower-oil",
    name: "Refined Sunflower Oil",
    category: "Edible Oils",
    range: "Sunflower Oil",
    badge: "Everyday refined",
    code: "KR-SFO",
    image: refinedSunflowerOil,
    summary:
      "Light, neutral-tasting refined sunflower oil for retail packing, food service and industrial frying lines.",
    description:
      "Our refined sunflower oil is processed to deliver a clear, pale-gold oil with a clean, neutral taste and dependable frying performance. Its consistent profile suits retail packing, bakery and snack production, food-service kitchens and industrial frying lines. It is available in packed formats as well as flexitank and bulk export shipments, with final parameters confirmed against the buyer's specification.",
    specs: [
      { label: "Free fatty acid", value: "Specification on request" },
      { label: "Moisture", value: "Specification on request" },
      { label: "Colour", value: "Specification on request" },
      { label: "Shelf life", value: "Specification on request" },
    ],
    packaging: ["1L / 2L / 5L PET", "15L jerrycan / tin", "Flexitank & bulk vessel"],
    applications: ["Retail & private label", "Bakery & snacks", "Food service frying"],
  },
  {
    slug: "mustard-oil",
    name: "Cold-Pressed Mustard Oil",
    category: "Edible Oils",
    range: "Specialty Oils",
    badge: "Cold pressed",
    code: "KR-MUS",
    image: coldPressedMustardOil,
    summary:
      "Pungent, deep-amber kachi ghani mustard oil pressed at controlled temperature to retain natural aroma.",
    description:
      "Pressed from selected mustard seed at controlled temperatures, this cold-pressed oil retains the characteristic pungent aroma and deep-amber appearance associated with kachi ghani mustard oil. It is filtered for a clean finish and supplied for culinary retail, food-service, personal-care and selected industrial applications in buyer-approved pack formats.",
    specs: [
      { label: "Extraction", value: "Cold pressed" },
      { label: "Allyl isothiocyanate", value: "Specification on request" },
      { label: "Moisture", value: "Specification on request" },
      { label: "Shelf life", value: "Specification on request" },
    ],
    packaging: ["1L / 5L PET", "15L tin", "200L drums"],
    applications: ["Ethnic retail markets", "Food service", "Personal care formulations"],
  },
];

export const industries = [
  {
    name: "Food Manufacturing",
    description:
      "Consistent oil grades for bakery, snacks, sauces and ready-to-eat production lines.",
  },
  {
    name: "Retail & Private Label",
    description:
      "Packed formats and label support for importers, distributors and supermarket brands.",
  },
  {
    name: "HoReCa & Food Service",
    description:
      "High-stability frying oils in bulk formats for kitchens, caterers and QSR chains.",
  },
  {
    name: "Personal Care & Cosmetics",
    description: "Base oils and derivatives for formulation houses and contract manufacturers.",
  },
  {
    name: "Feed & Agri Processing",
    description: "Oilseeds, kernels and by-products for crushers, feed mills and processors.",
  },
  {
    name: "Industrial & Technical",
    description: "Vegetable-origin inputs for technical blending and industrial applications.",
  },
];

export const certifications = [
  {
    name: "Quality Management",
    note: "Placeholder — replace with your certificate name and number.",
  },
  { name: "Food Safety System", note: "Placeholder — certification details to be confirmed." },
  { name: "Export Registration", note: "Placeholder — registration details to be confirmed." },
  { name: "Lab Analysis Reports", note: "Batch-wise CoA issued with every shipment." },
];

export const qualitySteps = [
  {
    title: "Sourcing & intake",
    body: "Incoming seed and oil lots are sampled and screened against agreed intake parameters.",
  },
  {
    title: "Processing control",
    body: "Refining and pressing parameters are monitored at defined control points throughout the run.",
  },
  {
    title: "Laboratory testing",
    body: "Physical and chemical parameters are verified before release; third-party testing on request.",
  },
  {
    title: "Packing & sealing",
    body: "Batch coding, tamper-evident sealing and container inspection prior to stuffing.",
  },
  {
    title: "Documentation",
    body: "CoA, packing list, invoice and shipping documents prepared per destination requirements.",
  },
];

export const regions = [
  { name: "Middle East & GCC", ports: "Jebel Ali, Dammam, Doha" },
  { name: "Africa", ports: "Mombasa, Lagos, Djibouti" },
  { name: "Europe", ports: "Rotterdam, Hamburg, Valencia" },
  { name: "South & Southeast Asia", ports: "Colombo, Singapore, Port Klang" },
  { name: "Americas", ports: "Houston, Santos, Montreal" },
  { name: "Oceania", ports: "Melbourne, Auckland" },
];

export const whyChooseUs = [
  {
    title: "Specification-led supply",
    body: "Every enquiry is quoted against written parameters, packing and destination requirements.",
  },
  {
    title: "Single point of contact",
    body: "One export desk handles pricing, sampling, documentation and post-shipment follow-up.",
  },
  {
    title: "Flexible packing",
    body: "Retail PET, tins, jerrycans, drums, flexitank and bulk options for varied trade lanes.",
  },
  {
    title: "Documentation discipline",
    body: "Clean paperwork prepared to destination norms to keep customs clearance predictable.",
  },
  {
    title: "Sampling programme",
    body: "Pre-shipment samples and batch retention samples available on request.",
  },
  {
    title: "Responsive turnaround",
    body: "Structured quotations returned promptly, with clarity on validity and Incoterms.",
  },
];

export const resources = [
  {
    title: "Product specification sheets",
    kind: "Document",
    body: "Downloadable parameter sheets per grade and packing format. Available on request.",
  },
  {
    title: "Packing & loading guide",
    kind: "Guide",
    body: "Container utilisation, palletisation and flexitank loading reference for buyers.",
  },
  {
    title: "Incoterms & documentation primer",
    kind: "Explainer",
    body: "How quotations, Incoterms and shipping documents fit together on an export order.",
  },
  {
    title: "Quality & testing overview",
    kind: "Explainer",
    body: "Which parameters we test, when we test them, and what appears on the CoA.",
  },
];

export const faqs = [
  {
    q: "What is your minimum order quantity?",
    a: "MOQ depends on grade, packing and destination. Share your requirement and we will confirm the workable minimum in our quotation.",
  },
  {
    q: "Can you supply private label packing?",
    a: "Yes. Packed formats can be supplied with buyer artwork subject to destination labelling rules and minimum volumes.",
  },
  {
    q: "Do you provide samples before an order?",
    a: "Pre-shipment samples can be arranged for qualified enquiries; courier costs are usually to buyer account.",
  },
  {
    q: "Which Incoterms do you quote on?",
    a: "We typically quote FOB, CFR and CIF. Other terms can be discussed based on the trade lane.",
  },
  {
    q: "How quickly will I get a quotation?",
    a: "Complete enquiries — product, quantity, packing, destination port — are normally answered within one business day.",
  },
  {
    q: "What documents accompany a shipment?",
    a: "Commercial invoice, packing list, certificate of analysis and the shipping documents required by the destination market.",
  },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/industries", label: "Industries" },
  { to: "/quality", label: "Quality" },
  { to: "/global-presence", label: "Global Presence" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
] as const;
import { sunflowerProducts } from '@/data/sunflower-products';
products.splice(1, 0, ...sunflowerProducts);


