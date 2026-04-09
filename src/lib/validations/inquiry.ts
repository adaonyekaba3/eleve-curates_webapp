import { z } from "zod";

export const inquirySchema = z.object({
  fullName: z.string().min(2).max(120),
  email: z.string().email().max(255),
  phoneNumber: z.string().max(40).optional().or(z.literal("")),
  eventType: z.string().min(2).max(100),
  eventDate: z.string().min(1),
  eventLocation: z.string().min(2).max(160),
  estimatedGuestCount: z.coerce.number().int().positive().max(20000),
  budgetRange: z.string().min(2).max(80),
  referralSource: z.string().max(140).optional().or(z.literal("")),
  eventDescription: z.string().min(20).max(3000),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
