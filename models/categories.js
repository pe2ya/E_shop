module.exports = (sequelize, type) => {
    return sequelize.define('categories', {
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
        perent_category_id: {
            type: type.INTEGER
        }
    })
}