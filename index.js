const Module = require('module')

const {require: oldRequire} = Module.prototype

const label = name => {
	const text = `load ${name}` + ' '.repeat(30)
	return text.slice(0, 35)
}

Module.prototype.require = function (name) {
	console.time(label(name))
	// eslint-disable-next-line prefer-rest-params
	const output = Reflect.apply(oldRequire, this, arguments)
	console.timeEnd(label(name))
	return output
}

module.exports = require
