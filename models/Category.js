const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true
    },
    name: {
         type: DataTypes.STRING,
         allowNull: false
    },
    time: {
        type: DataTypes.STRING,
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