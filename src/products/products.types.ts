import {Sequelize} from "sequelize";

export interface ProductsTypes {
    id: number,
    name: string,
    price: number,
    descriptionShort: string,
    descriptionLong: string,
    active: boolean,
    updatedAt: string,
    categoryId: number,
    shopId: number
}

