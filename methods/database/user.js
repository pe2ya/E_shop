const { Role, User, Session } = require(global.baseDir + "sequelize");
const { Op } = require("sequelize")
const { GetCoockiesDataByName } = require(global.baseDir + "methods/cookies")
const { SessionSet } = require("../../methods/database/session")


/**
 * 
 * @param {string} username usermane
 * @param {string} email email
 * @param {string} password password
 * @param {string} c_password comfirmed password 
 * @returns {object} returnt user, if passwords doensn't much or if user cannot be created returns null
 */
async function UserSingUp(username, email, password, c_password)
{
    if(password != c_password) return null

    try {
        const role_id = await Role.findOne({
            where: { name: "customer" }
        })
    
        const user = await User.create({
            username: username,
            email: email,
            password: password,
            role_id: role_id
        }) 

        return user
    } catch(error)
    {
        console.error(error)

        return null
    }
}

/**
 * Checking if user send correct data and then return session value if session was created, true if session updated and false if user doesn't loggined
 * @param {string} cookie session value
 * @param {string} loginData username/email 
 * @param {*} password password
 * @returns {object}  return session value if session was created, true if session updated and false if user doesn't loggined
 */
async function UserLogin(cookie, loginData, password)
{
    const user = await User.findOne({
        where: {
            [Op.or]: [
                { username: loginData },
                { email: loginData }
            ],
            password: password
        }
    })

    if (!user) return null

    return await SessionSet(user.id, cookie)
    
}

module.exports = {
    UserSingUp,
    UserLogin
}