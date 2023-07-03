import { Sequelize } from "sequelize";

const db = new Sequelize('veiculos', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
export default db