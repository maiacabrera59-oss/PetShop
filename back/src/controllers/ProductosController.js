
const ProductosService = require("../services/ProductosService");

// GET /api/productos?categoria=N
async function listarProductos(req, res) {
    const { categoria } = req.query;

    const productos = await ProductosService.listarProductos(categoria);

    res.json(productos);
}

// POST /api/productos
async function crearProducto(req, res) {
    const { nombre, idCategoria, precio, stock } = req.body;

    const producto = await ProductosService.crearProducto(
        nombre,
        idCategoria,
        precio,
        stock
    );

    res.status(201).json(producto);
}

module.exports = {
    listarProductos,
    crearProducto
};
