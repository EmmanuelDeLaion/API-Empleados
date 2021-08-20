import { Router } from "express"; 
import empleadosController from "../controllers/empleadosController";


class EmpleadosRoutes {

    public router : Router = Router();

    constructor(){
        this.config();
    }

    config() : void {
        this.router.get('/', empleadosController.listaEmpleados);
        this.router.get('/:id', empleadosController.getOne);
        this.router.post('/', empleadosController.create);
        this.router.put('/:id', empleadosController.update);
        this.router.delete('/:id', empleadosController.delete);
    }

}

const empleadosRoutes = new EmpleadosRoutes();
export default empleadosRoutes.router;
