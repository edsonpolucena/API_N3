import { Sequelize } from "sequelize";
import db from "../config/database.js"

const {DataTypes} = Sequelize

const Veiculo = db.define('veiculo', {
    id_veiculo: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    placa_veiculo: {
        type:Sequelize.STRING(10)
    },
    modelo_veiculo: {
        type:Sequelize.STRING(20)
    },
    preco_veiculo: {
        type:Sequelize.DECIMAL(10.2)
    },
    id_proprietario: {
        type:Sequelize.INTEGER
    },
    id_tipoveiculo: {
        type:Sequelize.INTEGER
    }
},{
    freezeTableName: true,
    timestamps: false
})
export default Veiculo