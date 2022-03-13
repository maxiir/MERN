
const controller = {};

controller.index = (req,res)=>{
    res.send('index')
}
controller.getVideo = (req,res)=>{
    res.send('obtiene video')
}
controller.crearVideo = (req,res)=>{
    res.send('crear video')
}
controller.deleteVideo = (req,res)=>{
    res.send('elimina video')
}
controller.updateVideo = (req,res)=>{
    res.send('actualiza video')
}



module.exports = controller;