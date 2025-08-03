import { z } from "zod";
import { contactFormSchema } from "@/lib/validations";

export type Contact = z.infer<typeof contactFormSchema>;
