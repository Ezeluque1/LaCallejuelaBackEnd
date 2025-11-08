-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pedido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numeroPedido" TEXT NOT NULL,
    "nombreCliente" TEXT NOT NULL,
    "precioDelivery" REAL DEFAULT 800.0,
    "estado" TEXT DEFAULT 'PREPARANDO',
    "horarioEntrega" DATETIME,
    "metodoPago" TEXT NOT NULL DEFAULT 'EFECTIVO',
    "detalle" TEXT,
    "tipoEntrega" TEXT NOT NULL DEFAULT 'RETIRO_LOCAL',
    "precioTotal" REAL NOT NULL DEFAULT 0.0,
    "creadoEn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Pedido" ("creadoEn", "detalle", "estado", "horarioEntrega", "id", "metodoPago", "nombreCliente", "numeroPedido", "precioDelivery", "precioTotal", "tipoEntrega") SELECT "creadoEn", "detalle", "estado", "horarioEntrega", "id", "metodoPago", "nombreCliente", "numeroPedido", "precioDelivery", "precioTotal", "tipoEntrega" FROM "Pedido";
DROP TABLE "Pedido";
ALTER TABLE "new_Pedido" RENAME TO "Pedido";
CREATE UNIQUE INDEX "Pedido_numeroPedido_key" ON "Pedido"("numeroPedido");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
