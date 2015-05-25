var palmetto = require('../')

var ee = palmetto({
  endpoint: '127.0.0.1',
  pub: 5000,
  sub: 6000
})

ee.on('hello', function (event) {
  console.log(event)
})

setTimeout(function() {
  ee.emit('send', {
    to: 'hello',
    from: 'goodbye',
    subject: 'foo'
  })  
}, 500)
