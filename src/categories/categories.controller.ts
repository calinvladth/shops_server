import {Request, Response} from 'express'
import Categories from "../categories/categories.model";

async function getAll(req: Request, res: Response) {
    try {
        res.send(await Categories.findAll());
    } catch (e) {
        res.send(e)
    }
}

async function getById(req: Request, res: Response) {
    try {
        res.send(await Categories.findOne({
            where: {id: req.params.id}
        }))
    } catch (e) {
        res.send(e)
    }
}

async function create(req: Request, res: Response) {
    try {
        res.send(await Categories.create(req.body))
    } catch (e) {
        res.send(e)
    }
}

async function update(req: Request, res: Response) {
    try {
        res.send(await Categories.update(req.body, {where: {id: req.params.id}}))
    } catch (e) {
        res.send(e)
    }
}

async function remove(req: Request, res: Response) {
    try {
        const removedProduct = await Categories.destroy({where: {id: req.params.id}})
        res.send([removedProduct])
    } catch (e) {
        res.send(e)
    }
}

const categoriesController = {
    getAll,
    getById,
    create,
    update,
    remove
}

export default categoriesController