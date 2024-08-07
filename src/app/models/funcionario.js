const db = require('./connection')

const Funcionarios = db.sequelize.define("funcionarios",
    {
        name:
        {
            type: db.Sequelize.STRING
        },
        cpf:
        {
            type: db.Sequelize.STRING
        },
        email:
        {
            type: db.Sequelize.STRING
        }
    }
)

// Funcionarios.sync({force:true})
// .then(()=>
// {
//     console.log("Table funcionarios created")
// }).catch((error)=>
// {
//     console.log(`Table not created ${error}`)
// })

module.exports = Funcionarios