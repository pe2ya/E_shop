module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: type.STRING,
            validate: {
                is: /^[A-Za-z0-9]{3,32}$/,
                notEmpty: true,
                unique: true
            }
        },
        email: {
            type: type.STRING,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: type.STRING,
            validate: {
                is: /^[A-Za-z0-9]{3,24}$/,
                notEmpty: true
            }
        },
        role_id: {
            type: type.INTEGER
        },
        timestamps: true
    })
}