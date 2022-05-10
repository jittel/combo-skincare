const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Image extends Model {}

Image.init({
    url: {
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
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'images',
});

module.exports = Image;