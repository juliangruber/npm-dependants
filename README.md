# npm-dependants

Get dependants of a module on npm.

## Usage

Use the JavaScript API:

```js
const dependants = require('npm-dependants')

for await (const dependant of dependants('express')) {
  console.log(dependant)
  // webpack-dev-server
  // webpack-bundle-analyzer
  // ...
}
```

Use the CLI:

```bash
$ npx npm-dependants express
webpack-dev-server
webpack-bundle-analyzer
# ...
```

Use as an [Op](https://cto.ai/):

```bash
$ npm install -g @cto.ai/ops && ops account:signup
$ ops run @juliangruber/npm-dependants brace-expansion
```

## Installation

```bash
$ npm install npm-dependants
```

## Implementation

Since there is [no reliable api](https://twitter.com/juliangruber/status/1209066065550028801) for querying dependant packages currently, this module scrapes [npmjs.com](https://npmjs.com) - at the risk of npm changing their DOM. If you notice anything breaking, please open an issue 🙇‍♂️.

## Sponsors

This project is [sponsored](https://github.com/sponsors/juliangruber) by [CTO.ai](https://cto.ai/), making it easy for development teams to create and share workflow automations without leaving the command line.

[![](https://apex-software.imgix.net/github/sponsors/cto.png)](https://cto.ai/)
