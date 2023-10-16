const Sequelize = require('sequelize')
const database = new Sequelize('sqlite://db.sqlite', {
  logging: true
})

const UserModel = require('./models/users')
const UserPreferencesModel = require('./models/user_preferences')
const RecommendationsModel = require('./models/recommendations')
const RolesModel = require('./models/roles')
const ProductsModel = require('./models/products')
const ProductReviewsModel = require('./models/products_reviews')
const CategoriesModel = require('./models/categories')
const LanguagesModel = require('./models/languages')
const ShoppingCartModel = require('./models/shopping_cart')
const OrdersModel = require('./models/orders')
const OrderItemsModel = require('./models/order_items')
const TranslationsModel = require('./models/translations')
const SessionsModel = require('./models/sessions')

const User = UserModel(database, Sequelize)
const UserPreferences = UserPreferencesModel(database, Sequelize)
const Recommendation = RecommendationsModel(database, Sequelize)
const Role = RolesModel(database, Sequelize)
const Product = ProductsModel(database, Sequelize)
const ProductReview = ProductReviewsModel(database, Sequelize)
const Category = CategoriesModel(database, Sequelize)
const Language = LanguagesModel(database, Sequelize)
const ShoppingCart = ShoppingCartModel(database, Sequelize)
const Order = OrdersModel(database, Sequelize)
const OrderItem = OrderItemsModel(database, Sequelize)
const Translation = TranslationsModel(database, Sequelize)
const Session = SessionsModel(database, Sequelize)

User.belongsTo(Role, {
    foreignKey: "role_id",
});

UserPreferences.belongsTo(User, {
    foreignKey: "user_id",
});

UserPreferences.belongsTo(Language, {
    foreignKey: "language_id",
});

Recommendation.belongsTo(User, {
    foreignKey: "user_id",
});

Recommendation.belongsTo(Product, {
    foreignKey: "product_id",
});

Product.belongsTo(Category, {
    foreignKey: "category_id",
});

ProductReview.belongsTo(Product, {
    foreignKey: "product_id",
});

ProductReview.belongsTo(User, {
    foreignKey: "user_id",
});

Category.belongsTo(Category, {
    foreignKey: "perent_category_id",
});

ShoppingCart.belongsTo(User, {
    foreignKey: "user_id",
});

ShoppingCart.belongsTo(Product, {
    foreignKey: "product_id",
});

Order.belongsTo(User, {
    foreignKey: "user_id",
});

OrderItem.belongsTo(Order, {
    foreignKey: "order_id",
});

OrderItem.belongsTo(Product, {
    foreignKey: "product_id",
});

Translation.belongsTo(Language, {
    foreignKey: "language_id",
});

Translation.belongsTo(Category, {
    foreignKey: "category_id",
});

Translation.belongsTo(Product, {
    foreignKey: "product_id",
});

Session.belongsTo(User, {
    foreignKey: "user_id",
});


database.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  })

  module.exports = {
    User,
    UserPreferences,
    Recommendation,
    Role,
    Product,
    ProductReview,
    Category,
    Language,
    ShoppingCart,
    Order,
    OrderItem,
    Translation,
    Session
  }