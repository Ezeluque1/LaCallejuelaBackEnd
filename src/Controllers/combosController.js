import { getProductos } from "../Models/productosModel.js";

const estadoPedido =  ["PREPARANDO","LLEVANDO","ENTREGADO"]
const TipoEntrega =  ["RETIRO_LOCAL","DELIVERY"]
const MetodoPago =  ["EFECTIVO","TRANSFERENCIA"]

export const listarProductos = async(req,res)=>{
    try{
        const productos = await getProductos()
        return res.status(200).json({productos})
    }catch(error){
        res.status(500).json({message:"Error en el servidor"})
    }
}

export const EstadosPedido = async(req,res)=>{
    try{
        return res.status(200).json({estadoPedido})
    }catch{
        return res.status(500).json({message:"Error en el servidor"})
    }
}

export const TiposEntrega = async(req,res)=>{
    try{
        return res.status(200).json({TipoEntrega})
    }catch{
        return res.status(500).json({message:"Error en el servidor"})
    }
}

export const MetodosPago = async(req,res)=>{
    try{
        return res.status(200).json({MetodoPago})
    }catch{
        return res.status(500).json({message:"Error en el servidor"})
    }
}