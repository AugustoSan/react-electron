const { Client } = require("pg");

const DATABASE_HOST="localhost";
const DATABASE_PORT=54321;
const DATABASE_DATABASE="gestion-ventas";
const DATABASE_USER="postgres";
const DATABASE_PASSWORD="mysecretpassword";

const getClientDB = () =>
{
    console.log('entro en getClientDB');
    return new Client({
        host: DATABASE_HOST,
        port: DATABASE_PORT,
        database: DATABASE_DATABASE,
        user: DATABASE_USER,
        password: DATABASE_PASSWORD,
    });
}

module.exports = {
    getClientDB
}