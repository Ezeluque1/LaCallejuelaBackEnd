import express from "express"
import {listarProductos,EstadosPedido,MetodosPago,TiposEntrega} from "../Controllers/combosController.js"
import { verificarToken } from "../Middlewares/userMiddleware.js"

const router = express.Router()

router.get("/combo-productos",verificarToken,listarProductos)
router.get("/combo-estadosPedido",verificarToken,EstadosPedido)
router.get("/combo-metodosPago",verificarToken,MetodosPago)
router.get("/combo-tiposEntrega",verificarToken,TiposEntrega)

export default router