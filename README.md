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
