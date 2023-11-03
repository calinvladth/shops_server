import express from "express";
import specsController from "./specs.controller";

const router = express.Router()

router.get('/', specsController.getAll);
router.post('/', specsController.create);
router.get('/:id', specsController.getById);
router.patch('/:id', specsController.update);
router.delete('/:id', specsController.remove);

module.exports = router;