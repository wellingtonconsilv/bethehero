const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');


const sessionController = require('./controller/SessionController');
const ongController = require('./controller/OngController');
const incidentController = require('./controller/IncidentController');
const publicController = require('./controller/PublicController');

const connection = require('./database/connection');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}),ongController.create);
routes.get('/ongs', ongController.index);

routes.get('/incidents/public', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), publicController.index);

routes.post('/incidents', incidentController.create);


routes.get('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), incidentController.index);


routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), incidentController.delete);


module.exports = routes;