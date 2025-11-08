import express from "express"
import {listarPedidos,crearPedido,modificarPedido,eliminarPedido,listarPedidosEstado,modificarEstadoPedido} from "../Controllers/pedidosController.js"
import {validateUpdatePedido,validatePostPedido,validateIdParams} from "../Middlewares/pedidos.middleware.js"
import {verificarToken} from "../Middlewares/userMiddleware.js"
import { chekUserRol } from "../Middlewares/userMiddleware.js"


const router = express.Router()

router.get("/",verificarToken,chekUserRol(["RECEPCIONISTA","DUEÑO"]),listarPedidos)
router.post("/",verificarToken,chekUserRol(["RECEPCIONISTA"]),validatePostPedido,crearPedido)
router.patch("/:id",verificarToken,chekUserRol(["RECEPCIONISTA"]),validateUpdatePedido,validateIdParams,modificarPedido)
router.delete("/:id",verificarToken,chekUserRol(["RECEPCIONISTA"]),validateIdParams,eliminarPedido)
router.get("/LLEVANDO",verificarToken,chekUserRol(["DELIVERY"]),listarPedidosEstado)
router.patch("/estado/:id",verificarToken,chekUserRol(["DELIVERY"]),validateIdParams,modificarEstadoPedido)

export default router