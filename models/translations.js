module.exports = (sequelize, type) => {
    return sequelize.define('translations', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        content_id: {
            type: type.STRING,
            validate: {
                notEmpty: true,
                unique: true
            }
        },
        language_id: {
            type: type.INTEGER,
            validate: {
                notEmpty: true
            }
        },
        name: {
            type: type.STRING,
        },
        category_id: {
            type: type.INTEGER,
            defaultValue: null
        },
        product_id: {
            type: type.INTEGER,
            defaultValue: null
        },
        description: {
            type: type.STRING(500),
            defaultValue: null
        }
    })
}