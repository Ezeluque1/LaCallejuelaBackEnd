import {z} from "zod"

export const createProductoSchema = z.object({
    nombre: z.string().min(3,"El nombre debe contener al menos 3 caracteres").max(254,"El nombre debe contener un maximo de 254 caracteres"),
    precioUnitario: z.number().min(0,"El precio unitario debe ser mayor a cero")
})

export const idSchema = z.number("La id debe ser un numero").int("La id debe ser un numero entero postivo")

export const updateProductoSchema = z.object({
    nombre: z.string().min(3,"El nombre debe contener al menos 3 caracteres").max(254,"El nombre debe contener un maximo de 254 caracteres"),
    precioUnitario: z.number().min(0,"El precio unitario debe ser mayor a cero")
})

