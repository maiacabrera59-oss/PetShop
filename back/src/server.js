
const express = require("express");
const cors = require("cors");
const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "../.env") });


const categoriasRoutes = require("./routes/CategoriasRoute");
const productosRoutes = require("./routes/ProductosRoute");

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("API Óptica La Mirada funcionando");
});

app.use("/api", categoriasRoutes);
app.use("/api", productosRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    console.log("Logs en: back/logs/acceso.log y back/logs/errores.log");
});