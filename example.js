// eslint-disable-next-line import/no-unassigned-import
require('.') // First import
const fs = require('fs')
const path = require('path')

fs.readFileSync(path.resolve('package.json')).toString()
