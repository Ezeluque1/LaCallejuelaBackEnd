import {updateProductoSchema,createProductoSchema,idSchema} from "../validators/productos.schema.js"

export function validatePostProducto(req,res,next){
    const result = createProductoSchema.safeParse(req.body)
    if(result.success){
        next()
    }else{
        // Mapeamos issues para devolver detalles específicos de cada error
        const detalles = result.error?.issues ? result.error.issues.map(issue => ({
            message: issue.message,
        })) : [{ message: "Error desconocido" }];
        
        return res.status(400).json({
            errors: detalles
        });
    }   
}

export function validateUpdateProducto(req,res,next){
    const result = updateProductoSchema.safeParse(req.body)
    if(result.success){
        next()
    }else{
        // Mapeamos issues para devolver detalles específicos de cada error
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