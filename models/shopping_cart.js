module.exports = (sequelize, type) => {
    return sequelize.define('shopping_cart', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: type.INTEGER,
            validate: {
                notEmpty: true
            }
        },
        product_id: {
            type: type.INTEGER,
            validate: {
                notEmpty: true
            }
        },
        quantity: {
            type: type.INTEGER,
            validate: {
                min: 1
            }
        }
    })
}