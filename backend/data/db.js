const {Sequelize} = require ("sequelize")


const db = new Sequelize ("articulos", "root", "fiesta2011",{
    host : "localhost",
    dialect:"mysql",
    port:3306
})

module.exports = db