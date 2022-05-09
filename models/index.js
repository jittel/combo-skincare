const Category = require('./Categories');
const Images = require('./Images');
const Product = require('./Product');
const User = require('./User');

User.hasOne(Images, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Images.belongsTo(User, {
    foreignKey: 'images_id',
    onDelete: 'CASCADE'
});

Product.hasOne(User, {
    foreignKey: 'user_id',
});

Product.hasMany(Category, {
    foreignKey: 'category_id',
});