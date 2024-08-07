const Sequelize = require("sequelize");

const sequelize = new Sequelize({
    host: "localhost",
    username: "root",
    password: "mysql193203#",
    database: "c3cine",
    dialect: "mysql",
    dialectModule: require("mysql2"),
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
