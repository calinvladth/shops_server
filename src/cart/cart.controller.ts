import {Request, Response} from 'express'
import Products from "../products/products.model";
import cartServices from "./cart.services";

async function renderCart(req: Request, res: Response) {
    try {
        const products = req.body
        const {cart, total} = await cartServices.calculateProductsInCart({products})

        res.send({cart, total});
    } catch (e) {
        res.send(e)
    }
}


const cartController = {
    renderCart,
}

export default cartController