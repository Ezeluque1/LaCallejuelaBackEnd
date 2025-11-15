import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
      datasources: {
    db: {
      url: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false, // Permite certificados no verificados
      },
    },
  },
})

export default prisma