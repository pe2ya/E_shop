module.exports = (sequelize, type) => {
    return sequelize.define('recommendations', {
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
        }
    })
}