"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose")); //mongoose es la conexion no la ddbb
const config_1 = __importDefault(require("./config"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield mongoose_1.default.connect(`mongodb://${config_1.default.MONGO_HOST}/${config_1.default.MONGO_DB}`); //donde se conecta y el nombre q va a tener la ddbb a crear
        console.log('database is connect to:', db.connection.name); //db.connection.name = para mostrar el nombre de la bbdd a la q se conecto    
    }
    catch (error) {
        console.error(error);
    }
}))(); //()para q se ejecute automaticamente la funcion
//try, catch capturan errores y no colapsa el sistema
