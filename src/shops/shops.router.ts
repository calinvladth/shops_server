import express from "express";
import shopsController from "./shops.controller";

const router = express.Router()

router.get('/', shopsController.getAll);
router.post('/', shopsController.create);
router.get('/:id', shopsController.getById);
router.patch('/:id', shopsController.update);
router.delete('/:id', shopsController.remove);


module.exports = router;