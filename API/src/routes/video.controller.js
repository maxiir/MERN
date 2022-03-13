import videos from "./videos"; //importo el modelo creado
const controller = {};

controller.index = (req,res)=>{
    res.send('index')
}
controller.getVideo = (req,res)=>{
    res.send('obtiene video')
}
controller.crearVideo = (req,res)=>{
    const video = new videos (req.body)
    console.log(video)
    res.send('crear video')
}
controller.deleteVideo = (req,res)=>{
    res.send('elimina video')
}
controller.updateVideo = (req,res)=>{
    res.send('actualiza video')
}



module.exports = controller;