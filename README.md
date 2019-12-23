# npm-dependants

Get dependants of a module on npm.

## Usage

```js
const dependants = require('npm-dependants')

for await (const dependant of dependants('express')) {
  console.log(dependant)
  // webpack-dev-server
  // webpack-bundle-analyzer
  // ...
}
```

## Installation

```bash
$ npm install npm-dependants
```

## License

MIT

## Sponsors

This project is [sponsored](https://github.com/sponsors/juliangruber) by [CTO.ai](https://cto.ai/), making it easy for development teams to create and share workflow automations without leaving the command line.

[![](https://apex-software.imgix.net/github/sponsors/cto.png)](https://cto.ai/)
