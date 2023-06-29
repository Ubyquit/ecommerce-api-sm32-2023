const express = require("express");
const categoriasControllers = require("../controllers/categoriasControllers");

const router = express.Router();

// !Rutas para las categorias
router.get('/', categoriasControllers.obtenerCategorias);

module.exports = router;