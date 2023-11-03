import express from "express";
import shopsController from "./cart.controller";
import cartController from "./cart.controller";

const router = express.Router()

router.get('/', cartController.renderCart);

module.exports = router;