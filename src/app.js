const express = require("express")

const app = express()

let PORT=process.env.PORT||8080

const server=app.listen(PORT,()=>console.log("listening"))

app.set("views","./views")
app.set("view engine","ejs")

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(express.static("./public"));

let carritoRouter = require("./routes/carritoRouter")
app.use("/api/productos-test",carritoRouter)

server.on("error", error=>{console.log(error)})