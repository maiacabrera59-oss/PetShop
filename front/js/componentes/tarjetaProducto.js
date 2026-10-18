
const formatoPrecio = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
});

export default function crearTarjetaProducto(producto) {
    const sinStock = producto.Stock === 0;

    return `
        <article class="tarjeta-producto ${sinStock ? "agotada" : ""}">
            <span class="categoria-producto">${producto.Categoria}</span>
            <h3 class="nombre-producto">${producto.Nombre}</h3>
            <p class="precio-producto">${formatoPrecio.format(producto.Precio)}</p>
            <p class="stock-producto ${sinStock ? "sin-stock" : ""}">
                ${sinStock ? "SIN STOCK" : `Stock: ${producto.Stock}`}
            </p>
        </article>
    `;
}