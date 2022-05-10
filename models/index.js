const Category = require('./Categories');
const Images = require('./Images');
const Product = require('./Product');
const User = require('./User');

User.hasOne(Images);

Images.belongsTo(User);

User.hasMany(Product)

Product.belongsTo(User);

Category.hasMany(Product);

Product.belongsTo(Category);

module.exports={
    User,
    Images,
    Product,
    Category
}