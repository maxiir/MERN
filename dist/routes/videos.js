"use strict";
//aca se crea el modelo de esquema para visualizar en la ddbb
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const videoSchema = new mongoose_1.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('video', videoSchema);
