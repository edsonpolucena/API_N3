import { Sequelize } from "sequelize";
import db from "../config/database.js"

const {DataTypes} = Sequelize


const Proprietario = db.define('proprietario', {
    id_proprietario: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    cpf: {
        type:Sequelize.STRING(11)
    },
    nome_proprietario: {
        type:Sequelize.STRING(50)
    },
    fone: {
        type:Sequelize.STRING(20)
    },
},
{
  timestamps: false,
    freezeTableName: true
})

export default Proprietario