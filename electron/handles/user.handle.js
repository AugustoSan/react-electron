const { getAllClients } = require('./../models/clients.model');
const handleGetAllClients = async () => {
    console.log('entro en handleGetAllClients');
    return await getAllClients();
}

module.exports = {
    handleGetAllClients
}