const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Images extends Model {}

Category.init({
    user_id: {
         type: DataTypes.STRING,
         references: {
             model: 'user',
             key: 'id'
         }
    },
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'images',
});

module.exports=Images