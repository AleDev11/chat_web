const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const app = express();
const router = require("../routes/router");

// Dependencias de la aplicación
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de las vistas
app.engine('.handlebars', engine());
app.set('view engine', '.handlebars');
app.set('views', path.join(__dirname, '../view'));

app.use(express.static(path.join(__dirname, '../public')));

// Controlador de las ruras de la aplicación
app.use(router.routes);

console.log(`[EXPRESS] Runing charge successfully`);

module.exports = app;