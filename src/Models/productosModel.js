import prisma from "../prisma.js"

export async function getProductos(){
    return await prisma.producto.findMany({
        select: {id:true,nombre:true}
    })
}

export async function postProducts(nombre,precioUnitario){
    return await prisma.producto.create({
        data:{
            nombre:nombre,
            precioUnitario:precioUnitario
        }
    })
}

export async function updateProducts(id,nombre,precioUnitario){
    return await prisma.producto.update({
        where:{id:id},
        data:{
            nombre:nombre,
            precioUnitario:precioUnitario
        }
    })
}

export async function deleteProducts(id){
    return await prisma.producto.delete({
        where:{
            id:id
        }
    })
}