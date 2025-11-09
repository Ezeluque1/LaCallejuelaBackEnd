import prisma from "../prisma.js";



export async function getPedidos(){
    return prisma.pedido.findMany({
        select:{
            id:true,
            nombreCliente:true,
            precioDelivery:true,
            estado:true,
            horarioEntrega:true,
            metodoPago:true,
            detalle:true,
            tipoEntrega:true,
            precioTotal:true,
            productos:{
                select:{
                    cantidad:true,
                    precioTotal:true,
                    producto:{
                        select:{
                            nombre:true,
                            precioUnitario:true
                        }
                    }
                }
            }
        }
    })
}

export async function getPreciosUnitarriosProductos(productosIDs){
    return prisma.producto.findMany({
        where:{id:{in:productosIDs}},
        select:{id:true,precioUnitario:true}
    })
}

export async function postPedido(nombre,prodcutosData,horarioEntrega,metodoPago,detalle,tipoEntrega,totalconDelivery){
    return prisma.pedido.create({
        data:{
            nombreCliente:nombre,
            horarioEntrega:horarioEntrega,
            metodoPago:metodoPago,
            detalle:detalle,
            tipoEntrega:tipoEntrega,
            precioTotal:totalconDelivery,
            productos:{
                create:prodcutosData
            }
        },
        include:{productos:{include: {producto:true}}}
    })
}

export async function updatePedido(pedidoID,nombre,prodcutosData,horarioEntrega,metodoPago,detalle,tipoEntrega,estado,totalconDelivery){
    return prisma.pedido.update({
        where:{id:pedidoID},
        data:{
            nombreCliente:nombre,
            horarioEntrega:horarioEntrega,
            metodoPago:metodoPago,
            detalle:detalle,
            tipoEntrega:tipoEntrega,
            estado:estado,
            precioTotal:totalconDelivery,
            productos:{
                deleteMany:{},
                create:prodcutosData
            }
        },
        include:{productos:{include: {producto:true}}}
    })
}

export async function deletePedido(pedidoID){
    return prisma.pedido.delete({
        where:{id:pedidoID}
    })
}

export async function getPedidosEstado(){
    return prisma.pedido.findMany({
        where:{estado:"LLEVANDO"},
        select:{
            id:true,
            nombreCliente:true,
            precioDelivery:true,
            estado:true,
            horarioEntrega:true,
            metodoPago:true,
            detalle:true,
            tipoEntrega:true,
            precioTotal:true,
            productos:true
        }
    })
}

export async function updateEstadoPedido(id){
    return prisma.pedido.update({
        where:{id:id},
        data:{
            estado:"ENTREGADO"
        }
    })
}




