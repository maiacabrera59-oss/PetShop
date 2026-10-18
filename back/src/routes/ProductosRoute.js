const { Router } = require("express");


const productosController = require("../controllers/ProductosController");
const asyncHandler = require("../middlewares/AsyncHandler");

const router = Router();

router.get("/productos", asyncHandler(productosController.listarProductos));
router.post("/productos", asyncHandler(productosController.crearProducto));


router.get("/salud", (req, res) => {
    res.json({
        estado: "ok",
        horaServidor: new Date().toISOString()
    });
});

module.exports = router;