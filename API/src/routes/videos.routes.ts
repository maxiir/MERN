const express = require('express');
const { Router } = require('express');
const router = express.Router();


const videoController = require('../routes/video.controller')

router.get('/',videoController.index);

module.exports=router;
//export default router;


//exportar variables = module.export
//exportar import = import default