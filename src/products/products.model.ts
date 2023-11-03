import {DataTypes} from "sequelize";
import db from "../db";
import Specs from "../specs/specs.model";
import Images from "../images/images.model";
import Categories from "../categories/categories.model";

const Products = db.define('products', {
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    description_short: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    description_long: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
}, {
    // freeze name table not using *s on name
    timestamps: false
})

Products.hasMany(Specs, {
    as: 'specs',
    foreignKey: {
        name: 'product_id',
        allowNull: false
    },
    onDelete: 'CASCADE'
})

Products.hasMany(Images, {
    as: 'images',
    foreignKey: {
        name: 'product_id',
        allowNull: false
    },
    onDelete: 'CASCADE'
})

export default Products