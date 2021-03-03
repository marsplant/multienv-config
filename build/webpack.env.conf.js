const NODE_ENV = process.env.NODE_ENV
let configPath
if (NODE_ENV) {
  configPath = `../config/${NODE_ENV}.env.js`
} else {
  configPath = `../config/prod.env.js`
}
const envConfig = configPath
module.exports = require(envConfig)
