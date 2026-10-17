const { sql, getConnection } = require("../config/db");

async function listarCategorias() {
    const pool = await getConnection();
    const resultado = await pool.request().execute("usp_ListarCategorias");
    return resultado.recordset;
}
module.exports = {
    listarCategorias
};