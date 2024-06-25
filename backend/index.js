const express = require("express");
const app = express();
const port = 3030;
const cors = require("cors");
const articulosRouter = require("./routes/articulosRoutes.js")
const db = require("./data/db.js");


app.use(cors());
app.use(express.json());
//app.get ("/",(req,res)=>{
//    res.send("Estas en el Home")
//})

app.use ("/articulos", articulosRouter)

const conexiondb = async ()=>{
    try{
        await db.authenticate()
        console.log("Conexion ok a la base de datos")
    }catch (error){
        console.log(`el error es: ${error}`)
    }
}

app.listen(port,()=>{
    conexiondb()
    console.log(`Server ok en el puerto ${port}`);
})