const express = require('express')
const path = require('path')

let app;

function createApp() {
    app = express();
    app.use(express.urlencoded({ extended: true })); // lo usamos para leer el formulario con el formato urlencoded
    app.use(express.static(path.join(__dirname, 'assets'))); // carcar los estilos css
    app.use(require('./routes/pages'));
    
    return app
}

function getApp() {
    return app;
}

module.exports = { createApp, getApp };