const connection = require('../database/connection');
module.exports = {

    async create(req, response) {
        const { value, description, title } = req.body;
        const ong_id = req.headers.authorization

        const [id] = await  connection('incident').insert({
            value,
            description,
            title,
            ong_id
        });
        return response.status(201).send({id});
    },

    async index(req, res) {
        const ong_id = req.headers.authorization;

        const incidents = await connection('incident')
            .where('ong_id', ong_id)
            .select('*');
        return res.send(incidents);
    },

    async delete(req, res) {
        const ong_id = req.headers.authorization;
        const {id} = req.params;

        const incident = await connection('incident')
            .where('id', id)
            .select('ong_id')
            .first();

        if (!incident || incident.ong_id !== ong_id)
            return res.status(404).json({error: 'Resource not found.'});

        await connection('incident').where('id', id).delete();
        return res.status(204).send();
    }
}