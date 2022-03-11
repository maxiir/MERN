"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const videos_routes_1 = __importDefault(require("./routes/videos.routes"));
const express = require('express');
const app = express();
app.use(videos_routes_1.default); //defino mi ruta inicial
app.use((0, morgan_1.default)('dev'));
exports.default = app;
