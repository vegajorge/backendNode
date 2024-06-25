const articulosModels = require("../models/articulosModels.js")



const traerArticulos = async(req,res)=>{
try{
    const articulos = await articulosModels.findAll()
    res.json(articulos)
}catch (error){
    res.json({message:error.message})
    }
}


const traerUnArticulo = async(req,res)=>{
    try {
        const articulos = await articulosModels.findByPk(req.params.id)
        res.json(articulos)
    } catch (error) {
        res.json({message:error.message})
    } 
}

const crearUnArticulo = async(req,res)=>{
    try {
        const articulos = await articulosModels.create(req.body)
        res.json({"message":"Se creo un nuevo articulo"})
    } catch (error) {
        res.json({message:error.message})
    }
}

const modificarUnArticulo = async (req, res) => {
    try {
        const articulos = await articulosModels.update(req.body,{
            where: {id:req.params.id}
        })
        res.json({"message":"Se actualizo un articulo"})
    } catch (error) {
        res.json({message:error.message})
    }
}

const borraUnArticulo = async (req, res) => {
    try {
        const articulos = await articulosModels.destroy({
            where: {id:req.params.id}  
        })

        res.json({"message":"Se borro un articulo"})
    } catch (error) {
        res.json({message:error.message})
    }
}



module.exports = {traerArticulos, traerUnArticulo, crearUnArticulo, modificarUnArticulo, borraUnArticulo}