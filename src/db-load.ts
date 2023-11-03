import db from "./db";
import Shops from "./shops/shops.model";
import Products from "./products/products.model";
import Specs from "./specs/specs.model";
import Categories from "./categories/categories.model";

async function loadDb() {
    await db.authenticate();
    await db.sync({force: true})
    await Shops.sync()
    await Categories.sync()
    await Products.sync()
    await Specs.sync()

    console.log('Connection has been established successfully.');
}

export default loadDb;