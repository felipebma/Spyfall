const { Router } = require('express')
const PlaceController = require('./Controllers/PlaceController')

const routes = Router();

/*
routes.get('/places',PlaceController.index());
routes.post('/places',PlaceController.update());
routes.delete('/places',PlaceController.destroy());

*/


module.exports = routes