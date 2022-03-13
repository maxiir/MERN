const express = require('express');
const { Router } = require('express');
const router = express.Router();


const videoController = require('../routes/video.controller')

router.get('/',videoController.index);
router.get('/videos/:id',videoController.getVideo);
router.post('/videos',videoController.crearVideo);
router.delete('/videos/:id',videoController.deleteVideo);
router.put('/videos/:id',videoController.updateVideo);

module.exports=router;



//exportar variables = module.export
//exportar import = import default