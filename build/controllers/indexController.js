"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({
            "Nombre": "Jesus Emmanuel",
            "Edad": "21"
        });
    }
}
exports.indexController = new IndexController();
