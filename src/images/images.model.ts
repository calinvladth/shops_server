import db from "../db";
import {DataTypes} from "sequelize";

const Images = db.define('images', {
    path: {
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

export default Images;