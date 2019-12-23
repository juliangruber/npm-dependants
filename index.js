var JSONStream = require('JSONStream')
var http = require('http')
var qs = require('querystring')
var Transform = require('stream').Transform

/**
 * Expose `dependants`.
 */

module.exports = dependants

/**
 * Get all node modules depending on module `name`.
 *
 *   Request -> Parse -> Out
 *
 * @param {String} name
 * @param {Object=} opts
 * @return {Stream}
 */

function dependants (name, opts) {
  opts = opts || {}

  var registry = opts.registry || 'http://registry.npmjs.org'
  var query = qs.stringify({
    group_level: 2,
    startkey: '["' + name + '"]',
    endkey: '["' + name + '",{}]'
  })
  var url = registry + '/-/_view/dependedUpon?' + query

  var out = Transform({ objectMode: true })
  out._transform = function (row, _, done) {
    done(null, row.key[1])
  }
  out.destroy = function () {
    req.abort()
    parse.destroy()
    process.nextTick(function () {
      out.emit('close')
    })
  }

  var req = http
    .get(url, function (res) {
      if (res.statusCode !== 200) {
        return parse.emit('error', new Error('bad status: ' + res.status))
      }

      res.pipe(parse)
    })
    .on('error', out.emit.bind(out, 'error'))

  var parse = JSONStream.parse(['rows', true]).on(
    'error',
    out.emit.bind(out, 'error')
  )

  return parse.pipe(out)
}
