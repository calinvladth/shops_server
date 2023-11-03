import express from "express";
import categoriesController from "./categories.controller";

const router = express.Router()

router.get('/', categoriesController.getAll);
router.post('/', categoriesController.create);
router.get('/:id', categoriesController.getById);
router.patch('/:id', categoriesController.update);
router.delete('/:id', categoriesController.remove);

module.exports = router;