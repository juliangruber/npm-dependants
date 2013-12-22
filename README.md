
# dependants-stream

Get a stream of node modules depending on a given module.

## Example

```js
var dependants = require('dependants-stream');

dependants('intersect')
  .on('data', function(name) {
    console.log(name);  
  })
  .on('end', function() {
    // ...
  });
```

## API

### dependants(name[, opts])

Create a readable stream emitting names of modules depending on module `name`. Overwrite the default registry url with `opts.registry`.

## Installation

```bash
$ npm install dependants-stream
```

## License

  MIT