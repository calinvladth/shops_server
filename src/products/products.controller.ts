import {Request, Response} from 'express'
import Products from "./products.model";
import Categories from "../categories/categories.model";

async function getAll(req: Request, res: Response) {
    try {
        const products = await Products.findAll({
            include: ['shop', 'category', 'specs', 'images'],
            where: {
                ...req.query
            }
        });
        res.send(products);
    } catch (e) {
        res.send(e)
    }
}

async function getById(req: Request, res: Response) {
    try {
        const product = await Products.findOne({
            where: {id: req.params.id},
            include: ['specs', 'images', {
                model: Categories,
                as: 'category',
                include: ['categoryId']
            }]
        });
        const category = await Categories.findByPk(product?.categoryId)

        res.send({product, category})
    } catch (e) {
        res.send(e)
    }
}

async function create(req: Request, res: Response) {
    try {
        res.send(await Products.create(req.body))
    } catch (e) {
        res.send(e)
    }
}

async function update(req: Request, res: Response) {
    try {
        res.send(await Products.update(req.body, {where: {id: req.params.id}}))
    } catch (e) {
        res.send(e)
    }
}

async function remove(req: Request, res: Response) {
    try {
        const removedProduct = await Products.destroy({where: {id: req.params.id}})
        res.send([removedProduct])
    } catch (e) {
        res.send(e)
    }
}

const productsController = {
    getAll,
    getById,
    create,
    update,
    remove
}

export default productsController