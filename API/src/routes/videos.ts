//aca se crea el modelo de esquema para visualizar en la ddbb

import {Schema,model} from "mongoose";

const videoSchema = new Schema({  //se lo guarda en una constante para luego utilizar el esquema
    titulo:{
        type: String,
        required: true,
        trim: true
    },
    descripcion:{
        type: String,
        trim: true
    },
    url:{
        type: String,
        required: true,
        trim: true
    }
},{timestamps:true})



export default model('video',videoSchema);