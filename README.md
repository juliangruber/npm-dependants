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

## Implementation

Since there is [no reliable api](https://twitter.com/juliangruber/status/1209066065550028801) for querying dependant packages currently, this module scrapes [npmjs.com](https://npmjs.com) - at the risk of npm changing their DOM. If you notice anything breaking, please open an issue 🙇‍♂️.

## Sponsors

This project is [sponsored](https://github.com/sponsors/juliangruber) by [CTO.ai](https://cto.ai/), making it easy for development teams to create and share workflow automations without leaving the command line.

[![](https://apex-software.imgix.net/github/sponsors/cto.png)](https://cto.ai/)
