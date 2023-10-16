module.exports = (sequelize, type) => {
    return sequelize.define('products', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING(20),
            validate: {
                notEmpty: true
            }
        },
        description: {
            type: type.STRING(500),
        },
        price: {
            type: type.FLOAT,
            defaultValue: 0.01
        },
        category_id: {
            type: type.INTEGER
        },
        photo_url: {
            type: type.STRING(100)
        },
        avarage_rating: {
            type: type.FLOAT,
            defaultValue: 0
        },
        total_reviews: {
            type: type.INTEGER,
            defaultValue: 0
        }
        
    })
}