module.exports = (sequelize, type) => {
    return sequelize.define('order_items', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        order_id: {
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