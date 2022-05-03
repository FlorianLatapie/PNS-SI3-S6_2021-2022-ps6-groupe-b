const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('User', {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  stade: Joi.number().required(),
  isAdmin: Joi.boolean().required(),
  login: Joi.string().required(),
  password: Joi.string().required()
})
