import { z } from "zod";

export const contactSchema = z.object({
  fullname: z
    .string()
    .min(1, { message: "El nombre es obligatorio" })
    .max(150, { message: "El nombre debe tener menos de 100 caracteres" })
    .regex(/^[A-Za-z\s]+$/, {
      message: "El nombre debe contener caracteres alfabéticos",
    }),
  email: z.string().email({ message: "Por favor ingresa un correo válido" }),
  message: z.string().min(1, { message: "El mensaje es obligatorio" }),
});
