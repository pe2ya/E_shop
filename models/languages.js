module.exports = (sequelize, type) => {
    return sequelize.define('languages', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        code: {
            type: type.STRING(20),
            validate: {
                notEmpty: true
            }
        },
        name: {
            type: type.STRING(100),
            validate: {
                notEmpty: true
            }
        }
    })
}