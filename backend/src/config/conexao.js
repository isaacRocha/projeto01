const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "root",
    database: "x_obra_liter"
})

client.connect()
module.exports = client;

