import express from "express";
import productsController from "./products.controller";

const router = express.Router()

router.get('/', productsController.getAll);
router.post('/', productsController.create);
router.get('/:id', productsController.getById);
router.patch('/:id', productsController.update);
router.delete('/:id', productsController.remove);

module.exports = router;