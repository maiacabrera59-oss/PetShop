const { Router } = require("express");


const categoriasController = require("../controllers/CategoriasController");

const router = Router();

router.get("/categorias", (categoriasController.listarCategorias));


router.get("/salud", (req, res) => {
    res.json({
        estado: "ok",
        horaServidor: new Date().toISOString()
    });
});

module.exports = router;