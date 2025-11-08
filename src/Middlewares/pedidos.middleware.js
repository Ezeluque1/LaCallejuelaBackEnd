import { number } from "zod";
import {createPedidoSchema,modificarPedidoSchema,idSchema} from "../validators/pedidos.schema.js"

export function validatePostPedido(req,res,next){
    const result = createPedidoSchema.safeParse(req.body)
    if(result.success){
        next()
    }else{
        const detalles = result.error?.issues ? result.error.issues.map(issue => ({
            message: issue.message,
        })) : [{ message: "Error desconocido" }];
        
        return res.status(400).json({
            errors: detalles
        });
    }
}

export function validateUpdatePedido(req,res,next){
    console.log(typeof req.body,req.body)
    const result = modificarPedidoSchema.safeParse(req.body)
    if(result.success){
        next()
    }else{
        const detalles = result.error?.issues ? result.error.issues.map(issue => ({
            message: issue.message,
        })) : [{ message: "Error desconocido" }];
        
        return res.status(400).json({
            errors: detalles
        });
    }
}

export function validateIdParams(req,res,next){
    const id = Number(req.params.id)
    const result = idSchema.safeParse(id)
    if(result.success){
        next()
    }else{
        const detalles = result.error?.issues ? result.error.issues.map(issue => ({
            message: issue.message,
        })) : [{ message: "Error desconocido" }];
        
        return res.status(400).json({
            errors: detalles
        });
    }
}