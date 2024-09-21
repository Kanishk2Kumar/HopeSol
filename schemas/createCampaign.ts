import { z } from "zod"

export const campaignSchema = z.object({

  coverImg: z.string().url(),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  targetAmount: z.number().positive("Target amount must be positive"),
  publicAddress: z.string().length(44, "Public address must be exactly 44 characters"),
  currentAmount: z.number().nonnegative("Current amount must be zero or positive"),
  deadline: z.date(),
  status: z.enum(["active", "completed", "expired", "pending"]),
})