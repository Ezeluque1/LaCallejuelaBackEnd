-- CreateEnum
CREATE TYPE "EstadoPedido" AS ENUM ('PREPARANDO', 'LLEVANDO', 'ENTREGADO');

-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('DELIVERY', 'RECEPCIONISTA', 'DUEÑO');

-- CreateEnum
CREATE TYPE "MetodoPago" AS ENUM ('EFECTIVO', 'TRANSFERENCIA');

-- CreateEnum
CREATE TYPE "TipoEntrega" AS ENUM ('RETIRO_LOCAL', 'DELIVERY');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "gmail" TEXT NOT NULL,
    "contraseña" TEXT NOT NULL,
    "rol" "Rol" NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" SERIAL NOT NULL,
    "nombreCliente" TEXT NOT NULL,
    "precioDelivery" DOUBLE PRECISION DEFAULT 800.0,
    "estado" "EstadoPedido" DEFAULT 'PREPARANDO',
    "horarioEntrega" TIMESTAMP(3),
    "metodoPago" "MetodoPago" NOT NULL DEFAULT 'EFECTIVO',
    "detalle" TEXT,
    "tipoEntrega" "TipoEntrega" NOT NULL DEFAULT 'RETIRO_LOCAL',
    "precioTotal" DOUBLE PRECISION DEFAULT 0.0,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Producto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "precioUnitario" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PedidoProducto" (
    "id" SERIAL NOT NULL,
    "pedidoId" INTEGER NOT NULL,
    "productoId" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precioTotal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PedidoProducto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_gmail_key" ON "Usuario"("gmail");

-- AddForeignKey
ALTER TABLE "PedidoProducto" ADD CONSTRAINT "PedidoProducto_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PedidoProducto" ADD CONSTRAINT "PedidoProducto_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto"("id") ON DELETE CASCADE ON UPDATE CASCADE;
