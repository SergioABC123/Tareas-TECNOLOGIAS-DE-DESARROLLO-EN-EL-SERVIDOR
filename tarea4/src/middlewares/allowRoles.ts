import { Request, Response, NextFunction } from 'express';

// "Fabrica de middlewares"
export function AllowRoles(roles: string[]){ // funcion recibe la lista de roles
    return (req: Request, res: Response, next: NextFunction) => { // devolvemos otra funcion (middleware)

        const roleUsuario= req.query.role as string; // es lo que recibimos del query params de la url
                                                     // lo ponemos como string y se lo asignamos a role
        if (roles.includes(roleUsuario)){
            next(); // Si tiene alguno de los roles requeridos
        } else{
            res.status(403).json({message: 'Access denied'}); // si no lo tiene
        }
    };
}