module.exports = (sequelize, type) => {
    return sequelize.define('product_reviews', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: type.INTEGER,
            validate: {
                notEmpty: true
            }
        },
        user_id: {
            type: type.INTEGER,
            validate: {
                notEmpty: true
            }
        },
        rating: {
            type: type.INTEGER,
            validate: {
                min: 1,
                max: 5
            }
        },
        comment: {
            type: type.STRING(255)
        }
    })
}