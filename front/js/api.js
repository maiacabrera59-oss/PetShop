
const API_URL = "/api";

async function pedirJson(url, opciones) {
    const respuesta = await fetch(url, opciones);
    const texto = await respuesta.text();

    let datos;

    try {
        datos = texto ? JSON.parse(texto) : {};
    } catch {
        throw new Error(
            `La API devolvió una respuesta no válida (HTTP ${respuesta.status}).`
        );
    }

    if (!respuesta.ok) {
        throw new Error(
            datos.mensaje ||
            datos.error ||
            "Error al comunicarse con la API."
        );
    }

    return datos;
}

export function obtenerCategorias() {
    return pedirJson(`${API_URL}/categorias`);
}

export function obtenerProductos(idCategoria) {
    const query = idCategoria ? `?categoria=${idCategoria}` : "";
    return pedirJson(`${API_URL}/productos${query}`);
}

export function crearProducto(producto) {
    return pedirJson(`${API_URL}/productos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto)
    });
}
