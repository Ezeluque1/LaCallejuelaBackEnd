import express from "express"
import { crearProducto,modificarProducto,elimianrProducto } from "../Controllers/prodcutosController.js"
import { verificarToken } from "../Middlewares/userMiddleware.js"
import {validateIdParams,validatePostProducto,validateUpdateProducto} from "../Middlewares/productos.middleware.js"
import { chekUserRol } from "../Middlewares/userMiddleware.js"

const router = express.Router()

router.post("/",verificarToken,chekUserRol(["DUEÑO"]),validatePostProducto,crearProducto)
router.patch("/:id",verificarToken,chekUserRol(["DUEÑO"]),validateIdParams,validateUpdateProducto,modificarProducto)
router.delete("/:id",verificarToken,chekUserRol(["DUEÑO"]),validateIdParams,elimianrProducto)

export default router