import {Request, Response} from 'express'
import Shops from "./shops.model";

async function getAll(req: Request, res: Response) {
    try {
        const shops = await Shops.findAll({include: ['categories', 'products']});
        res.send(shops);
    } catch (e) {
        res.send(e)
    }
}

async function getById(req: Request, res: Response) {
    try {
        res.send(await Shops.findOne({
            where: {id: req.params.id}
        }))
    } catch (e) {
        res.send(e)
    }
}

async function create(req: Request, res: Response) {
    try {
        res.send(await Shops.create(req.body))
    } catch (e) {
        res.send(e)
    }
}

async function update(req: Request, res: Response) {
    try {
        res.send(await Shops.update(req.body, {where: {id: req.params.id}}))
    } catch (e) {
        res.send(e)
    }
}

async function remove(req: Request, res: Response) {
    try {
        const removedProduct = await Shops.destroy({where: {id: req.params.id}})
        res.send([removedProduct])
    } catch (e) {
        res.send(e)
    }
}

const shopsController = {
    getAll,
    getById,
    create,
    update,
    remove,
}

export default shopsController