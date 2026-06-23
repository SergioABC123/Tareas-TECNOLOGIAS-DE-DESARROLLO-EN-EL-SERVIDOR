import { Request, Response, Router } from 'express';
import { AllowRoles } from '../middlewares/allowRoles';

const router = Router(); // usamos el servicio de router que nos da express

router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Public route' });
});

// Aplicamos los roles permitidos para las rutas. 
// Primero se lee el AllowRoles con el rol/es.
// Si tiene el permiso se da acceso a la ruta
router.get('/admin', AllowRoles(['admin']), (req: Request, res: Response) => { 
    res.json({ message: 'Welcome admin' });
});

router.get('/reports', AllowRoles(['admin', 'manager']), (req: Request, res: Response) => {
    res.json({ message: 'Reports area' });
});

router.get('/inventory', AllowRoles(['employee', 'manager']), (req: Request, res: Response) => {
    res.json({ message: 'Inventory area' });
});

export default router;