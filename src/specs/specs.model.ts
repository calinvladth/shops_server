import {DataTypes} from "sequelize";
import db from "../db";
import Products from "../products/products.model";

const Specs = db.define('specs', {
    key: {
        type: DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false
    },
    index: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    timestamps: false,
})
export default Specs