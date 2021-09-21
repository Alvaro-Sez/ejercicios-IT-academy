const dataJson = require('./parameters.json')

const funcions = {
 suma: () => dataJson[0].a + dataJson[0].b,
 resta: () => dataJson[1].a - dataJson[1].b,
 multiplicacio:() => dataJson[2].a * dataJson[2].b
}

module.exports = funcions





