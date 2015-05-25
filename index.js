'use strict'

var EventEmitter = require('events').EventEmitter
var ee = new EventEmitter()

var axon = require('axon')
var pub = axon.socket('pub')
var sub = axon.socket('sub')

module.exports = function (config) {
  pub.connect(config.pub, config.endpoint)
  sub.connect(config.sub, config.endpoint)

  sub.on('message', function (event) {
    if (event.to) ee.emit(event.to, event)
  })

  ee.on('send', function (event) {
    pub.send(event)
  })
  return ee
}