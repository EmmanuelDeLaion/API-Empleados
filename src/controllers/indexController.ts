import {Request, Response} from 'express';


class IndexController{

    public index (req: Request, res:Response){
       res.json(
           {
               "Nombre": "Jesus Emmanuel",
               "Edad":"21"
           }
       );
    } 
}


export const indexController = new IndexController();