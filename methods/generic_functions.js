/**
 * Generate string with proper length
 * @param {integer} length length of string 
 * @returns {string} chatchain string 
 */
function CharChain(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
} 

module.exports =
{
    CharChain
}