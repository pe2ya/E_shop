module.exports = (sequelize, type) => {
    return sequelize.define('user_preferences', {
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
        language_id: {
            type: type.INTEGER
        },
        theme: {
            type: type.STRING(20),
            defaultValue: "light"
        }
    })
}