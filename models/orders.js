module.exports = (sequelize, type) => {
    return sequelize.define('orders', {
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
        total_price: {
            type: type.FLOAT,
            validate: {
                min: 0
            }
        },
        status: {
            type: type.STRING(30)
        },
        timestamps: true
    })
}