const { getClientDB } = require("./conection");

const findAddressByIDClient = async (id) => {
    const client = await getClientDB();
    await client.connect();
    try {
      const temp = await client.query(`SELECT * FROM fn_getAllAddressByClient(${id})`);
      const result = temp.rows;
      // const result:Array<IDirection> = await db.all(`SELECT * FROM direcciones WHERE id_client=${id}`);
      return result;
    } catch (error) {
      // console.log('ERROR:', error);
      return [];
    } finally {
      await client.end();
    }
  }

const getAllClients = async () =>
{
    console.log('entro en getAllClients');
    const client = await getClientDB();
    try {
        await client.connect();
        // console.log('entro en findAllClients');

        const temp = await client.query(`SELECT * FROM fn_getAllClients()`);
        console.log('temp: ', temp);
        const result= temp.rows;
        console.log('result: ', result);
        const allClients= await Promise.all(
        result.map(async (cliente) => {
            cliente.direcciones = await findAddressByIDClient(cliente.id);
            return cliente;
        })
        );
        return allClients;
    } catch (error) {
        console.log('ERROR:', error);
        return [];
    } finally {
        await client.end();
    }
};

module.exports = {
    findAddressByIDClient,
    getAllClients
}