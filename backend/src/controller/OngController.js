const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async create(req, res) {
        const { name, email, city, uf, whatsapp } = req.body;
        const id = crypto.randomBytes(10).toString('HEX');

        await connection('ong').insert({
            id,
            name,
            email,
            city,
            uf,
            whatsapp
        });

        return res.status(201).json({ id });

    },

    async index(req, res) {

        const data = await connection.select('*').from('ong');
        return res.json(data);
    }
}