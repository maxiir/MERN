"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    MONGO_DB: process.env.MONGO_DB || 'videosdb',
    MONGO_USER: process.env.MONGO_USER || 'admin',
    MONGO_PASS: process.env.MONGO_PASS || 'admin',
    MONGO_HOST: process.env.MONGO_HOST || 'localhost',
};
