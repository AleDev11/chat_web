const express = require('express');
const { ViewHome } = require("../controllers/PageControllers");
const routes = express.Router();

routes.get('/', ViewHome);

module.exports = { routes: routes };