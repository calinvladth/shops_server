import {Sequelize} from "sequelize";

const user = 'postgres'
const host = 'localhost'
const database = 'shop'
const password = '1q2w3e'
const port = 5432

const db = new Sequelize(database, user, password, {
    host,
    port,
    dialect: 'postgres',
    logging: false
})
export default db;