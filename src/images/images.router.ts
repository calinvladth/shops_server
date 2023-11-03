import express from "express";
import imagesController from "./images.controller";

const router = express.Router()

router.get('/', imagesController.getAll);
router.post('/', imagesController.create);
router.get('/:id', imagesController.getById);
router.patch('/:id', imagesController.update);
router.delete('/:id', imagesController.remove);

module.exports = router;