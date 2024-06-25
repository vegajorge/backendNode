const db = require('../data/db.js')

const {DataTypes} = require("sequelize")

const articulosModels = db.define ("articulos",{
    titulo:{type:DataTypes.STRING},
    descripcion:{type:DataTypes.STRING},
    valor:{type:DataTypes.NUMBER}
})

module.exports = articulosModels