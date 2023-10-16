module.exports = (sequelize, type) => {
    return sequelize.define('sessions', {
        id : {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: type.INTEGER
        },

        value: {
            type: type.STRING
        },

        loggined: {
            type: type.BOOLEAN
        }
    })
}