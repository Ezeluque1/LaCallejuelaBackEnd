import {getPedidos, postPedido,getPreciosUnitarriosProductos, updatePedido, deletePedido,getPedidosEstado,updateEstadoPedido} from "../Models/pedidosModel.js"

export const listarPedidos = async(req,res)=>{
    try{

        const pedidos = await getPedidos()
        return res.status(200).json({pedidos})

    }catch(error){
        console.log(error)
        return res.status(500).json({message:"Error en el servidor"})
    }
}

export const crearPedido = async(req,res)=>{
    const {productos,nombreCliente,horarioEntrega,metodoPago,detalle,tipoEntrega} = req.body

    try{
        const productoIDs = productos.map(p => p.productoId)

        const productosDB = await getPreciosUnitarriosProductos(productoIDs)

        const pedidosProductosData = productos.map(p=>{
            const productoDB = productosDB.find(pd => pd.id === p.productoId)
            const precioTotal = (productoDB?.precioUnitario || 0) * p.cantidad
            return{
                producto : {connect: {id: p.productoId}},
                cantidad : p.cantidad,
                precioTotal
            }
        })  

        const delivery = 800
        const total = pedidosProductosData.reduce((acc,item)=> acc + item.precioTotal, 0)
        const totalconDelivery = delivery + total

        const nuevoPedido = await postPedido(nombreCliente,pedidosProductosData,horarioEntrega,metodoPago,detalle,tipoEntrega,totalconDelivery)
        return res.status(200).json({nuevoPedido})
    }catch(error){
        console.log(error.message)
        return res.status(500).json({message:"Error en el servidor"})
    }
}   

export const modificarPedido = async(req,res)=>{
    const pedidoID = Number(req.params.id)
    const {productos,nombreCliente,horarioEntrega,metodoPago,detalle,tipoEntrega,estado} = req.body

    try{
        const productoIDs = productos.map(p => p.productoId)

        const productosDB = await getPreciosUnitarriosProductos(productoIDs)

        const pedidosProductosData = productos.map(p=>{
            const productoDB = productosDB.find(pd => pd.id === p.productoId)
            const precioTotal = (productoDB?.precioUnitario || 0) * p.cantidad
            return{
                producto : {connect: {id: p.productoId}},
                cantidad : p.cantidad,
                precioTotal
            }
        })  

        const delivery = 800
        const total = pedidosProductosData.reduce((acc,item)=> acc + item.precioTotal, 0)
        const totalconDelivery = delivery + total

        const pedidoModificado = await updatePedido(pedidoID,nombreCliente,pedidosProductosData,horarioEntrega,metodoPago,detalle,tipoEntrega,estado,totalconDelivery)
        return res.status(200).json({pedidoModificado})
    }catch(error){
        console.log(error.message)
        return res.status(500).json({message:"Error en el servidor"})
    }
}   

export const eliminarPedido = async(req,res)=>{
    const pedidoID = Number(req.params.id)
    try{
        const pedidoEliminado = await deletePedido(pedidoID)
        res.status(200).json({pedidoEliminado})
    }catch(error){
        console.log(error)
        return res.status(500).json({message:"Error en el servidor"})
    }
}

export const listarPedidosEstado = async(req,res)=>{

    try{

        const pedidoEstado = await getPedidosEstado()
        return res.status(200).json({pedidoEstado})

    }catch(error){
        return res.status(500).json({message:"Error en el servidor"})
    }
}

export const modificarEstadoPedido = async(req,res)=>{
    const id = Number(req.params.id)

    try{

        const estadoModificado = await updateEstadoPedido(id)
        return res.status(200).json({estadoModificado})
        
    }catch(error){
        return res.status(500).json[{message:"Error en el servidor"}]
    }
}