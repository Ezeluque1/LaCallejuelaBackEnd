import express from "express"
import cors from "cors"
import userRouter from "./Routes/userRoute.js";
import dotenv from "dotenv"
import pedidosRouter from "./Routes/pedidosRouter.js"
import combosRouter from "./Routes/combosRouter.js"
import productoRouter from "./Routes/productosRouter.js"

dotenv.config()
const app = express()

app.use(cors({
    origin: true, // tu frontend
    methods: ["GET", "POST", "PUT","PATCH", "DELETE", "OPTIONS"],
    credentials: true // si vas a usar cookies o tokens en headers
}));

app.use(express.json())
app.use("/LaCallejuela/user",userRouter)
app.use("/LaCallejuela/pedidos",pedidosRouter)
app.use("/LaCallejuela/productos",productoRouter)
    

app.use("/LaCallejuela/llenar-combobox",combosRouter)

const PORT = process.env.PORT || 4000      

app.listen(PORT,()=>{
    console.log(`El servidor esta escuchadno en el puerto ${PORT}`)
})

