
const { CharChain } = require(global.baseDir + "methods/generic_functions")
const { Session } = require(global.baseDir + "sequelize");

/**
 * Create a new row in table and set a session as active
 * @param {integer} user_id if of user
 * @returns {boolean} session value if created and false if doesn't 
 */
async function SessionCreate(user_id)
{
    try {
        const session = await Session.create({
            user_id: user_id,
            value: CharChain(200),
            loggined: true
        })

        return session.value

    } catch (error) {
        
        console.error(error)
        return false
    }
}

/**
 * Set session on active or inactive
 * @param {string} session_value session value
 * @param {boolean} loggined true - active, false - inactive
 * @returns {boolean} true if changes provided by database and false if doesn't
 */
async function SessionSetter(session_value, loggined) {

    const [affectedRows] = await Session.update({
        loggined: loggined},
        {
            where: {
                value: session_value
            }
        }
    )

    return affectedRows > 0
}

/**
 * Set session if user has row in table and create if doesn't
 * @param {integer} user_id user id 
 * @param {string} session_value session value 
 * @returns {boolean} true if session is active, value if created and false if doesn't
 */
async function SessionSet(user_id, session_value) {
    if(!user_id) return null
    
    if (!session_value) {
        return await SessionCreate(user_id)
    }
    else {
        return await SessionSetter(session_value, true)
    }

}

module.exports = {
    SessionCreate,
    SessionSetter,
    SessionSet
}
