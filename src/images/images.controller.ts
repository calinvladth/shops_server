import {Request, Response} from 'express'
import Images from "../images/images.model";

async function getAll(req: Request, res: Response) {
    try {
        res.send(await Images.findAll());
    } catch (e) {
        res.send(e)
    }
}

async function getById(req: Request, res: Response) {
    try {
        res.send(await Images.findOne({
            where: {id: req.params.id}
        }))
    } catch (e) {
        res.send(e)
    }
}

async function create(req: Request, res: Response) {
    try {
        res.send(await Images.create(req.body))
    } catch (e) {
        res.send(e)
    }
}

async function update(req: Request, res: Response) {
    try {
        res.send(await Images.update(req.body, {where: {id: req.params.id}}))
    } catch (e) {
        res.send(e)
    }
}

async function remove(req: Request, res: Response) {
    try {
        const removedProduct = await Images.destroy({where: {id: req.params.id}})
        res.send([removedProduct])
    } catch (e) {
        res.send(e)
    }
}

const imagesController = {
    getAll,
    getById,
    create,
    update,
    remove
}

export default imagesController