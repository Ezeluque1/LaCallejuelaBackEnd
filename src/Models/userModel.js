import prisma from "../prisma.js"

export async function getUser(emailUser){
    return await prisma.usuario.findUnique({
        where:{gmail:emailUser}
    })
}



