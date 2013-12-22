var test = require('tap').test;
var dependants = require('..');

/**
 * I published `dependants-stream-test-b` which depends on
 * `dependants-stream-test-a`. If someone publishes another module depending
 * on `dependants-stream-test-a` that person will be publicly chided.
 */

test('dependants', function(t) {
  t.plan(2);
  var stream = dependants('dependants-stream-test-a');
  stream.on('error', t.fail.bind(t));
  stream.on('data', function(dependant) {
    t.equal(dependant, 'dependants-stream-test-b');
  });
  stream.on('end', t.ok.bind(t, true));
});
