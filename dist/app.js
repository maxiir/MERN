"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors")); //permite decir q servidores tienen permiso de pedir cosas
const videoRoutes = require('./routes/videos.routes');
const express = require('express');
const app = express();
app.use(videoRoutes); //defino mi ruta inicial
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)()); //permite a cualquier servidor conectarse o hacer peticiones
app.use(express.json()); //para q entienda datos formato json
app.use(express.urlencoded({ extended: false })); //entiende los campos de un formulario post
app.use('/', videoRoutes);
module.exports = app;
