
/**
 * Getting array of data from user cookies
 * @param {request} req user request
 * @returns {string[]} 
 */
function GetCoockiesData(req)
{
    let cookies = req.headers.cookie;

    if(!cookies) return null

    return cookies.split("; ")
}

/**
 * Getting cookie value by key
 * @param {request} req user request
 * @param {string} name name of cookie
 * @returns {string} if cookie exist return value of it, else return null
 */
function GetCoockiesDataByName(req, name)
{
    const cookie = GetCoockiesData(req)

    if(!cookie) return null

    for(let i = 0; i < cookie.length; i++)
    {
        if(!cookie[i]) break;

        if(cookie[i].includes(name)) {

            return cookie[i].split("=")[1]
        }
    }
}

module.exports = {
    GetCoockiesData,
    GetCoockiesDataByName
}