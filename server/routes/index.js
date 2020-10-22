const { Router } = require("express");
const router = Router();

const { getShops, getMalls } = require("../controllers/index.controller");
const { getCupons, createCupons } = require("../controllers/cupons.controller");

router.get("/lojas", getShops);
router.get("/shoppings", getMalls);

router.get("/cupons", getCupons);
router.post("/cupons", createCupons);

module.exports = router;