import Products from "../products/products.model";
import {CartTypes} from "./cart.types";
import {ProductsTypes} from "../products/products.types";

async function calculateProductsInCart({products}: { products: CartTypes[] }) {
    /*
        TODO: What's coming in is the cart [{productId: x, quantity: y}]
              What's rendered, is the order {products: [], total: [], billing: {}}
     */
    const renderedProducts = []
    let productsTotal = 0;

    for (let i = 0; i < products.length; i++) {
        const product: ProductsTypes | null = await Products.findByPk(products[i]['product_id'])
        const total = product.price * products[i].quantity
        productsTotal += total
        renderedProducts.push({
            product,
            total,
            quantity: products[i].quantity
        })
    }

    return {cart: renderedProducts, total: productsTotal.toFixed(2)}
}

const cartServices = {
    calculateProductsInCart
}

export default cartServices