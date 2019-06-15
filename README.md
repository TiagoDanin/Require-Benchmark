# Require Benchmark

[![Travis](https://img.shields.io/travis/TiagoDanin/Require-Benchmark.svg?branch=master&style=flat-square)](https://travis-ci.org/TiagoDanin/Require-Benchmark) [![Downloads](https://img.shields.io/npm/dt/require-benchmark.svg?style=flat-square)](https://npmjs.org/package/require-benchmark) [![Node](https://img.shields.io/node/v/require-benchmark.svg?style=flat-square)](https://npmjs.org/package/require-benchmark) [![Version](https://img.shields.io/npm/v/require-benchmark.svg?style=flat-square)](https://npmjs.org/package/require-benchmark) [![XO code style](https://img.shields.io/badge/code%20style-XO-red.svg?style=flat-square)](https://github.com/xojs/xo) 

Package loading time in NodeJs

<p align="center"><img src="screenshot.png"></p>

## Installation

Module available through the [npm registry](https://www.npmjs.com/). It can be installed using the  [`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) or [`yarn`](https://yarnpkg.com/en/) command line tools.

```sh
# NPM
npm install require-benchmark --save
# Or Using Yarn
yarn add require-benchmark
```

## Example

```js
// eslint-disable-next-line import/no-unassigned-import
require('require-benchmark') // First import
const fs = require('fs')
const path = require('path')

fs.readFileSync(path.resolve('package.json')).toString()
```

## Tests

To run the test suite, first install the dependencies, then run `test`:

```sh
# NPM
npm test
# Or Using Yarn
yarn test
```

## Dependencies

None

## Dev Dependencies

- [xo](https://ghub.io/xo): JavaScript happiness style linter ❤️

## Contributors

Pull requests and stars are always welcome. For bugs and feature requests, please [create an issue](https://github.com/TiagoDanin/Require-Benchmark/issues). [List of all contributors](https://github.com/TiagoDanin/Require-Benchmark/graphs/contributors).

## License

[MIT](LICENSE) © [Tiago Danin](https://TiagoDanin.github.io)