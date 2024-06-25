const express = require("express");
const router = express.Router();

const {traerArticulos,traerUnArticulo,crearUnArticulo,modificarUnArticulo,borraUnArticulo} = require ("../controllers/articulosControllers.js")

router.get ("/",traerArticulos)
router.get ("/:id",traerUnArticulo)
router.post ("/",crearUnArticulo)
router.put ("/:id",modificarUnArticulo)
router.delete ("/:id",borraUnArticulo)

module.exports =router