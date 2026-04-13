import { z } from "zod";

export const maisonEventTypes = [
  "Wedding",
  "Bridal Party",
  "Special Event",
  "Photoshoot",
  "Other",
] as const;

export const maisonBudgetRanges = [
  "$120 – $300",
  "$300 – $500",
  "$500 – $800",
  "$800 – $1,200",
  "$1,200+ (Premium Bespoke)",
] as const;

export const maisonOutfitCounts = ["1", "2", "3", "4+"] as const;

export const maisonServiceOptions = [
  "Asoebi Styling",
  "Custom Dress / Outfit",
  "Reception Look",
  "Bridal Styling",
  "Group Styling (Bridesmaids)",
  "Fabric Sourcing",
  "Full Styling Consultation",
] as const;

export const maisonFabricOptions = [
  "Lace",
  "Ankara",
  "Silk",
  "Aso-oke",
  "Other",
] as const;

export const maisonAdditionalServiceOptions = [
  "Styling Consultation",
  "Fabric Sourcing",
  "Group Coordination",
  "Accessories Styling",
] as const;

const eventTypes = maisonEventTypes;
const budgetRanges = maisonBudgetRanges;
const outfitCounts = maisonOutfitCounts;

const yn = z.enum(["yes", "no"]);

const optionalText = z
  .string()
  .max(8000)
  .optional()
  .transform((s) => (s === "" || s === undefined ? undefined : s));

const serviceItem = z.enum(maisonServiceOptions);
const fabricItem = z.enum(maisonFabricOptions);
const addOnItem = z.enum(maisonAdditionalServiceOptions);

export const maisonEleveIntakeSchema = z.object({
  fullName: z.string().min(2).max(120),
  email: z.string().email().max(255),
  phoneNumber: z.string().min(5).max(40),
  eventType: z.enum(eventTypes),
  eventName: optionalText,
  eventDate: optionalText,
  eventLocation: optionalText,
  serviceRequest: z.array(serviceItem).min(1),
  outfitCount: z.enum(outfitCounts),
  styleVision: optionalText,
  pinterestLink: optionalText,
  fabrics: z.array(fabricItem).optional(),
  preferredColors: optionalText,
  customMeasurements: yn,
  standardSize: z.string().max(20).optional().or(z.literal("")),
  fitNotes: optionalText,
  budgetRange: z.enum(budgetRanges),
  outfitCompleteDate: optionalText,
  fittingsAvailable: yn,
  additionalServices: z.array(addOnItem).optional(),
  finalNotes: optionalText,
});

export type MaisonEleveIntakeInput = z.infer<typeof maisonEleveIntakeSchema>;
