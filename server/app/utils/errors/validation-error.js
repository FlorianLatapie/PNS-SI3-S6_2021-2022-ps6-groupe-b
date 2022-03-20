const util = require('util')

function ValidationError(message, extra = {}) {
  Error.captureStackTrace(this, this.constructor)
  this.name = this.constructor.name
  this.message = message
  this.extra = extra
}

util.inherits(ValidationError, Error)

module.exports = ValidationError
