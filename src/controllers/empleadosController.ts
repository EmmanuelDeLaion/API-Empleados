import { Request, Response } from 'express';
import pool from '../database';

class EmpleadosController {

    public async listaEmpleados(req: Request, res: Response) {
        const empleados = await pool.query('SELECT * FROM empleados');
        res.json(empleados);
    }


    public async getOne(req: Request, res: Response) {
        const { id } = req.params;
        const empleado = await pool.query('SELECT * FROM empleados WHERE id = ' + [id]);
        if (empleado.length > 0) {
            return res.json(empleado[0]);
        } else {
            res.status(404).json(
                {
                    "Mensaje": "No se encontro el empleado"
                }
            );
        }
    }


    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO empleados set ?', [req.body]);
        console.log(req.body);
        res.json({
            "Mensaje": "Empleado creado correctamente"
        });
    }


    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE empleados set ? WHERE id = ?', [req.body, id]);
        res.json({
            "Mensjae": "El empleado se actualizo correctamente"
        });
    }


    public async delete(req: Request, res: Response) {
        const { id } = req.params;
        const empleado = await pool.query('SELECT * FROM empleados WHERE id = ' + [id]);
        if (empleado.length > 0) {
            await pool.query('DELETE FROM empleados WHERE id = ' + [id]);
            return res.json({
                "Mensaje": "El empleado se ha eliminado correctamente"
            });
        } else {
            res.json({
                "Mensaje": "El empleado no se encontro"
            });
        }
    }

}


const empleadosController = new EmpleadosController();
export default empleadosController;