import morgan from 'morgan';
import cors from 'cors'; //permite decir q servidores tienen permiso de pedir cosas
const videoRoutes = require('./routes/videos.routes')

const express = require('express');
const app = express()


app.use(videoRoutes) //defino mi ruta inicial
app.use(morgan('dev'))
app.use(cors()); //permite a cualquier servidor conectarse o hacer peticiones
app.use(express.json()); //para q entienda datos formato json
app.use(express.urlencoded({extended: false})); //entiende los campos de un formulario post

app.use('/',videoRoutes)
module.exports = app;