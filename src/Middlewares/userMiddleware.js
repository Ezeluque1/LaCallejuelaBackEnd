import jwt from "jsonwebtoken";
import {loginSchema} from "../validators/usuario.schema.js"

export const verificarToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  if (!authHeader.startsWith("Bearer ")) {
    return res.status(400).json({ message: "Formato de token inválido" });
  }

  const token = authHeader.split(" ")[1]; 

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
}

export const validaLogin = (req,res,next)=>{
    const result = loginSchema.safeParse(req.body)
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

export function chekUserRol(rol){
  return function(req,res,next){
    if(!rol.includes(req.user.rol)){
      return res.status(400).json({message:"No tienes permiso para realizar esta accion"})
    }else{
      next()
    }
  }
}