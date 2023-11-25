import * as z from "zod";

export const packageSchema = z.object({
  packageId: z.number().int(),
  people: z.number().int(),
  noOfDays: z.number().int(),
  bookingDate: z.string(),
  amount: z.number().int(),
});
