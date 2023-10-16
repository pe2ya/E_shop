

const { Role } = require(global.baseDir + 'sequelize');
const rolesConf = require(global.baseDir + 'configs/roles.json');

async function isTableEmpty() {
    const count = await Role.count();
    return count === 0
}

/**
 * Adding roles from config
 */
async function init() {
    const tableEmpty = await isTableEmpty();

    if(tableEmpty){
        await Role.bulkCreate(roles_conf.roles)

        console.log('Data seeded successfully.');
    }
    else {
        console.log('Table already has data. No need to seed.');
    }
}

module.exports = { init }