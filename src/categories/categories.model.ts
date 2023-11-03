import db from "../db";
import {DataTypes} from "sequelize";
import Products from "../products/products.model";

const Categories = db.define('categories', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

Categories.hasMany(Products, {
    as: 'products',
    foreignKey: {name: 'category_id', allowNull: false},
    onDelete: 'CASCADE',
})

Products.belongsTo(Categories, {
    foreignKey: 'category_id',
    targetKey: 'id'
})

export default Categories