
const { sql, getConnection } = require("../config/db");

async function listarProductos(categoria, busqueda = "") {
    const pool = await getConnection();

    const resultado = await pool.request()
        .input("IdCategoria", sql.Int, categoria ? Number(categoria) : null)
        .input("Busqueda", sql.NVarChar(100), busqueda || null)
        .execute("usp_ListarProductos");

    return resultado.recordset;
}

async function crearProducto(nombre, idCategoria, precio, stock) {
    const pool = await getConnection();

    const resultado = await pool.request()
        .input("IdCategoria", sql.Int, idCategoria)
        .input("Nombre", sql.NVarChar(80), nombre)
        .input("Precio", sql.Decimal(12, 2), precio)
        .input("Stock", sql.Int, stock)
        .output("IdProducto", sql.Int)
        .execute("usp_CrearProducto");

    return {
        IdProducto: resultado.output.IdProducto,
        IdCategoria: idCategoria,
        Nombre: nombre,
        Precio: precio,
        Stock: stock
    };
}

module.exports = {
    listarProductos,
    crearProducto
};