import {z} from "zod"

const productosSchema = z.object({
    productoId: z.number().int("La id del producto debe ser un numero entero positivo"),
    cantidad: z.number().int("La cantidad del prodcuto debe ser un numero entero positivo")
})

export const createPedidoSchema = z.object({
    nombreCliente: z.string().min(3,"El nombre debe contener al menos 3 caracteres").max(254,"El nombre debe contener un maximo de 254 caracteres"),
    horarioEntrega: z.string().optional(),
    metodoPago: z.string().min(3,"El metodo de pago debe contener al menos 3 caracteres").max(15,"El metodo de pago debe contener como maximo 15 caracteres"),
    detalle: z.string().min(3,"El detalle debe contener como minimo 3 caracteres").max(254,"El detalle debe contener como maximo 254 caracteres").optional(),
    tipoEntrega: z.string().min(3,"El tipo de entrega debe contener al menos 3 caracteres").max(254,"El tipo de entrega debe contener como maximo 254 caracteres"),
})

export const modificarPedidoSchema = z.object({
    nombreCliente: z.string().min(3,"El nombre debe contener al menos 3 caracteres").max(254,"El nombre debe contener un maximo de 254 caracteres"),
    horarioEntrega: z.string().datetime().optional(),
    metodoPago: z.enum(["EFECTIVO","TRANSFERENCIA"]),
    detalle: z.string().min(3,"El detalle debe contener como minimo 3 caracteres").max(254,"El detalle debe contener como maximo 254 caracteres").optional(),
    tipoEntrega: z.enum(["RETIRO_LOCAL","DELIVERY"]),
    estado: z.enum(["PREPARANDO","LLEVANDO","ENTREGADO"]),
    productos: z.array(productosSchema).min(1)
})

export const idSchema = z.number("La id debe ser un numero").int("La id debe ser un numero entero")


