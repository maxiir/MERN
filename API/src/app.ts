import morgan from 'morgan';
import videoRoutes from './routes/videos.routes'
const express = require('express');
const app = express()


app.use(videoRoutes) //defino mi ruta inicial
app.use(morgan('dev'))

export default app;