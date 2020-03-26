const express = require('express');

const sessionController = require('./controller/SessionController');
const ongController = require('./controller/OngController');
const incidentController = require('./controller/IncidentController');
const publicController = require('./controller/PublicController');

const connection = require('./database/connection');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.post('/ongs', ongController.create);
routes.get('/ongs', ongController.index);

routes.get('/incidents/public', publicController.index);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete);


module.exports = routes;