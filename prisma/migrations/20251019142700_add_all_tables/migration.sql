-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "gmail" TEXT NOT NULL,
    "contraseña" TEXT NOT NULL,
    "rol" TEXT NOT NULL,
    "creadoEn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numeroPedido" TEXT NOT NULL,
    "nombreCliente" TEXT NOT NULL,
    "precioDelivery" REAL NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'PREPARANDO',
    "horarioEntrega" DATETIME,
    "metodoPago" TEXT NOT NULL DEFAULT 'EFECTIVO',
    "detalle" TEXT,
    "tipoEntrega" TEXT NOT NULL DEFAULT 'RETIRO_LOCAL',
    "creadoEn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Producto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "precioUnitario" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "PedidoProducto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pedidoId" INTEGER NOT NULL,
    "productoId" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precioTotal" REAL NOT NULL,
    CONSTRAINT "PedidoProducto_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PedidoProducto_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_gmail_key" ON "Usuario"("gmail");

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_numeroPedido_key" ON "Pedido"("numeroPedido");
