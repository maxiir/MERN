"use strict";
//archivo principal
Object.defineProperty(exports, "__esModule", { value: true });
//import app from "./app"
require("./database"); //llama al archivo de base de datos
const app = require('./app');
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log('servidor en puerto:', app.get('port'));
});
