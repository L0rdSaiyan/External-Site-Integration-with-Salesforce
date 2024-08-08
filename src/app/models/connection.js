const Sequelize = require("sequelize");
import { PostgresDialect } from '@sequelize/postgres';

const sequelize = new Sequelize({
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    dialect: PostgresDialect,
    benchmark: true
});

sequelize.authenticate()
.then(() => {
    console.log("Successful to connect with the database");
})
.catch((error) => {
    console.log(`Error: ${error}`);
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};
