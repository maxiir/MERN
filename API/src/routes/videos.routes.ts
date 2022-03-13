import { Router } from "express";
const router = Router();

router.get('/videos',(req,res) => res.json('obteniendo los videos'));


export default router;
