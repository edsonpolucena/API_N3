import { Sequelize } from "sequelize";
import db from "../config/database.js"

const {DataTypes} = Sequelize

const Tipo_de_veiculo = db.define('tipo_de_veiculo', {
    id_tipoveiculo: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    tipo_veiculo: {
        type:Sequelize.STRING(20)
    }
},{
    freezeTableName: true,
    timestamps: false
})
export default Tipo_de_veiculo