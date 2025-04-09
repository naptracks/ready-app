import { z } from "zod";

export const passwordValidation = z
  .string()
  .regex(
    new RegExp(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    ),
    "Your password must contain at least 8 characters, including at least one number, one letter, and one special character."
  );

export const RegisterSchema = z
  .object({
    email: z.string().email(),
    password: passwordValidation,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ["confirmPassword"], // set the path of the error
  });

export type RegisterInputs = z.infer<typeof RegisterSchema>;
