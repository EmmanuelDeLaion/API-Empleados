"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class EmpleadosController {
    listaEmpleados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empleados = yield database_1.default.query('SELECT * FROM empleados');
            res.json(empleados);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const empleado = yield database_1.default.query('SELECT * FROM empleados WHERE id = ' + [id]);
            if (empleado.length > 0) {
                return res.json(empleado[0]);
            }
            else {
                res.status(404).json({
                    "Mensaje": "No se encontro el empleado"
                });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO empleados set ?', [req.body]);
            console.log(req.body);
            res.json({
                "Mensaje": "Empleado creado correctamente"
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE empleados set ? WHERE id = ?', [req.body, id]);
            res.json({
                "Mensjae": "El empleado se actualizo correctamente"
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const empleado = yield database_1.default.query('SELECT * FROM empleados WHERE id = ' + [id]);
            if (empleado.length > 0) {
                yield database_1.default.query('DELETE FROM empleados WHERE id = ' + [id]);
                return res.json({
                    "Mensaje": "El empleado se ha eliminado correctamente"
                });
            }
            else {
                res.json({
                    "Mensaje": "El empleado no se encontro"
                });
            }
        });
    }
}
const empleadosController = new EmpleadosController();
exports.default = empleadosController;
