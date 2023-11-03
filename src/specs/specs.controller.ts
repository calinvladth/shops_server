import {Request, Response} from 'express'
import Specs from "../specs/specs.model";

async function getAll(req: Request, res: Response) {
    try {
        res.send(await Specs.findAll());
    } catch (e) {
        res.send(e)
    }
}

async function getById(req: Request, res: Response) {
    try {
        res.send(await Specs.findOne({
            where: {id: req.params.id}
        }))
    } catch (e) {
        res.send(e)
    }
}

async function create(req: Request, res: Response) {
    try {
        res.send(await Specs.create(req.body))
    } catch (e) {
        res.send(e)
    }
}

async function update(req: Request, res: Response) {
    try {
        res.send(await Specs.update(req.body, {where: {id: req.params.id}}))
    } catch (e) {
        res.send(e)
    }
}

async function remove(req: Request, res: Response) {
    try {
        const removedProduct = await Specs.destroy({where: {id: req.params.id}})
        res.send([removedProduct])
    } catch (e) {
        res.send(e)
    }
}

const specsController = {
    getAll,
    getById,
    create,
    update,
    remove
}

export default specsController