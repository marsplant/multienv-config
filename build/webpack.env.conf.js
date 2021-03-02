const NODE_ENV = process.env.NODE_ENV
console.log(NODE_ENV)
const envConfig = `../config/${NODE_ENV}.env.js`
module.exports = require(envConfig)
