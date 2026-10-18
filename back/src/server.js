
const express = require("express");
const cors = require("cors");
const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "../.env") });

const logger = require("./middlewares/Logger");
const { manejadorErrores, rutaNoEncontrada } = require("./middlewares/Errores");
const productosRoutes = require("./routes/ProductosRoute");
const categoriasRoutes = require("./routes/CategoriasRoute");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

// Servir el frontend de Pet Shop 
app.use(express.static(path.join(__dirname, "../../front")));

// Rutas de la API
app.use("/api", productosRoutes);
app.use("/api", categoriasRoutes);

// Middleware de errores
app.use(rutaNoEncontrada);
app.use(manejadorErrores);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    console.log("Logs en: back/logs/acceso.log y back/logs/errores.log");
});
