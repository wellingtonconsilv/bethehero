const connection = require('../database/connection');
module.exports = {

    async create (req, res) {
        const  { id } = req.body;

        const ong = await connection('ong')
            .where('id', id)
            .select('name')
            .first();

        if (!ong)
            return res.status(404).send({error: 'Resource not found'});

        return res.status(201).send(ong)
    }
}