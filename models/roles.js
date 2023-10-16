module.exports = (sequelize, type) => {
    return sequelize.define('roles', {
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
        }
    })
}