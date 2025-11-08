import {getUser} from "../Models/userModel.js"
import jwt from "jsonwebtoken"

export const login = async(req,res)=>{
    try{
        const {gmail,contraseña} = req.body

        if(!gmail || !contraseña){
            return res.status(400).json({message:"El email y contraseña son requeridos"})
        }

        const user = await getUser(gmail)

        if(!user){
            return res.status(400).json({message:"El usuario no existe"})
        }

        if(user.contraseña !== contraseña){ 
            return res.status(400).json({message:"La constraseña es incorrecta"})
        }

        const token = jwt.sign(
            {id:user.id,email:user.gmail,rol:user.rol}, //Payload
            process.env.JWT_SECRET, //Clave secreta
            {expiresIn: process.env.JWT_EXPIRES_IN}
        )      
        
        return res.status(200).json({token})

    }catch(error){
        return res.status(500).json({message:"Error en el servidor"})
    }  
}