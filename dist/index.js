"use strict";
//archivo principal
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
require("./database"); //llama al archivo de base de datos
app_1.default.set('port', process.env.PORT || 3000);
app_1.default.listen(app_1.default.get('port'), () => {
    console.log('servidor en puerto:', app_1.default.get('port'));
});
