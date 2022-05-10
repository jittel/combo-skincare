const Category = require('./Category');
const Image = require('./Image');
const Product = require('./Product');
const User = require('./User');

User.hasOne(Image, {
    foreignKey: 'user_id'
});

Image.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Product, {
    foreignKey: 'user_id'
});

Product.belongsTo(User, {
    foreignKey: 'user_id'
});

Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(Product, {
    foreignKey: 'category_id'
});

module.exports = {
    Category,
    Image,
    Product,
    User
};
