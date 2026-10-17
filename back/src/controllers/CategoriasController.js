const CategoriasService = require("../services/CategoriasService");

// GET /api/categorias
async function listarCategorias(req, res) {
    const categorias = await CategoriasService.listarCategorias();
    res.json(categorias);
}

module.exports = {
    listarCategorias
};