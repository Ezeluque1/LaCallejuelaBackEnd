import {postProducts,updateProducts,deleteProducts} from "../Models/productosModel.js"

export const crearProducto = async(req,res)=>{
    const {nombre,precioUnitario} = req.body

    try{

        const nuevoProducto = await postProducts(nombre,precioUnitario)
        return res.status(200).json({nuevoProducto})

    }catch(error){
        return res.status(500).json({message:"Error en el servidor"})
    }
}

export const modificarProducto = async(req,res)=>{
    const id = Number(req.params.id)
    const {nombre,precioUnitario} = req.body
    try{

        const productoModificado = await updateProducts(id,nombre,precioUnitario)
        return res.status(200).json({productoModificado})

    }catch(error){
        console.log(error)
        return res.status(500).json({message:"Error en el servidor"})
    }
}

export const elimianrProducto = async(req,res)=>{
    const id = Number(req.params.id)
    try{
        
        const prodcutoEliminado = await deleteProducts(id)
        return res.status(200).json({prodcutoEliminado})

    }catch(error){
        console.log(error)
        return res.status(500).json({message:"Error en el servidor"})
    }
}