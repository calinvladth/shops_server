import Shops from "./shops/shops.model";
import ShopsMock from "./shops/shops.mock";
import ProductsMock from "./products/products.mock";
import Products from "./products/products.model";
import SpecsMock from "./specs/specs.mock";
import Specs from "./specs/specs.model";
import ImagesMock from "./images/images.mock";
import Images from "./images/images.model";
import Categories from "./categories/categories.model";
import CategoriesMock from './categories/categories.mock';

async function dbMock() {
    await Shops.bulkCreate(ShopsMock)
    await Categories.bulkCreate(CategoriesMock)
    await Products.bulkCreate(ProductsMock)
    await Specs.bulkCreate(SpecsMock)
    await Images.bulkCreate(ImagesMock)
    console.log('Database has been populated successfully.');
}

export default dbMock;