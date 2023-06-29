const connection = require("../database");

const obtenerCategorias = (req, res) => {
  connection.query("SELECT * FROM categorias", (error, results) => {
    if (error) {
      console.error("Errors al obtener categorias", error);
      res.status(500).json({
        error: "Error al obtener categorias",
      });
    } else {
      res.json(results);
    }
  });
};

module.exports = {
  obtenerCategorias,
}

