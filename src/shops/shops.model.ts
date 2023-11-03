import {DataTypes} from "sequelize";
import db from "../db";
import Products from "../products/products.model";
import Categories from "../categories/categories.model";

const Shops = db.define('shops', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false
})

Shops.hasMany(Products, {
    as: 'products',
    foreignKey: {name: 'shop_id', allowNull: false},
    onDelete: 'CASCADE'
})

Shops.hasMany(Categories, {
    as: 'categories',
    foreignKey: {name: 'shop_id', allowNull: false},
    onDelete: 'CASCADE'
})

Products.belongsTo(Shops, {
    foreignKey: 'shop_id',
    targetKey: 'id'
})

export default Shops