const connection = require('../database/connection');
module.exports = {
    async index(req, res) {

        const { page = 1 } = req.query;

        const [count] = await connection('incident')
            .count();


        const incidents = await connection
            .limit(5)
            .join('ong', 'ong.id', '=', 'incident.ong_id')
            .offset((page - 1) * 5)
            .select(['incident.*', 'ong.name', 'ong.email', 'ong.whatsapp', 'ong.city', 'ong.uf'])
            .from('incident');

        res.header('X-Total-Count', count['count(*)'])
        return res.send(incidents)
    }
}