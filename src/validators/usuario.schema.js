import {z} from "zod"

export const loginSchema = z.object({
    gmail: z.email("Debe contener formato email").min(6,"El email debe contener al menos 6 caracteres").max(254,"El email puede contener como maximo 254 caracteres"),
    contraseña: z.string("La contraseña debe ser una cadena de caracteres").min(8,"La contraseña debe contener al menos 8 caracteres")
})

