const { Router } = require("express");


const productosController = require("../controllers/ProductosController");

const router = Router();

router.get("/productos", (productosController.listarProductos));
router.post("/productos", (productosController.crearProducto));


router.get("/salud", (req, res) => {
    res.json({
        estado: "ok",
        horaServidor: new Date().toISOString()
    });
});

module.exports = router;