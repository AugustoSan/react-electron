const { Client } = require('pg');

const DATABASE_HOST=process.env.DATABASE_HOST ?? 'localhost2';
const DATABASE_PORT=process.env.DATABASE_PORT ?? 5432;
const DATABASE_DATABASE=process.env.DATABASE_DATABASE ?? 'gestion-ventas2';
const DATABASE_USER=process.env.DATABASE_USER ?? 'postgres3';
const DATABASE_PASSWORD=process.env.DATABASE_PASSWORD ?? 'mysecretpassword1';

const getClientDB = () =>
{
    console.log('entro en getClientDB');
    console.log(`DATABASE_HOST: ${DATABASE_HOST}`);
    console.log(`DATABASE_PORT: ${DATABASE_PORT}`);
    console.log(`DATABASE_DATABASE: ${DATABASE_DATABASE}`);
    console.log(`DATABASE_USER: ${DATABASE_USER}`);
    console.log(`DATABASE_PASSWORD: ${DATABASE_PASSWORD}`);
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