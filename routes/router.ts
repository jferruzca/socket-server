import { Router, Request, Response } from 'express';

const router = Router();


router.get('/mensajes', (req:Request, res: Response)=> {
    res.json({
        ok: true,
        mensaje: 'Todo esta bien'
    });
    console.log("Respuesta GET: /mensajes", res.statusMessage);
});

router.post('/mensajes', (req:Request, res: Response)=> {
    res.json({
        ok: true,
        mensaje: 'Post - Listo',
        data: req.body
    });
    console.log("Respuesta POST: /mensajes", res.statusMessage);
});

router.post('/mensajes/:id', (req:Request, res: Response)=> {
    res.json({
        ok: true,
        mensaje: 'Post - Listo',
        params: req.params,
        data: req.body
    });
    console.log("Respuesta POST: /mensajes", res.statusMessage);
});

export default router;