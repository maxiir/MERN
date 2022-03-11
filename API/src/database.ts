import mongoose from "mongoose"; //mongoose es la conexion no la ddbb
import config from "./config";


(async () =>{
try{
    const db= await mongoose.connect (`mongodb://${config.MONGO_HOST}/${config.MONGO_DB}`) //donde se conecta y el nombre q va a tener la ddbb a crear
    console.log('database is connect to:',db.connection.name) //db.connection.name = para mostrar el nombre de la bbdd a la q se conecto    
    }catch(error){
        console.error(error);
    }
})() //()para q se ejecute automaticamente la funcion
    //try, catch capturan errores y no colapsa el sistema

