const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init({
    name: {
         type: DataTypes.STRING,
         allowNull:false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
   },
   category_id: {
    type: DataTypes.INTEGER,
    references: {
        model: 'category',
        key: 'id'
    }
},
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
});

module.exports=Product