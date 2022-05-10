const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init({
    name: {
         type: DataTypes.STRING,
         allowNull: false
    },
    day: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    night: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
});

module.exports = Category;