module.exports = function (src) {
  if (src) {
    console.log("--log-- reverse-loader's input:", src)
    src = src.split('').reverse().join('')
    console.log("--log-- reverse-loader's output:", src)
  }
  return `module.exports = '${src}'`
}
