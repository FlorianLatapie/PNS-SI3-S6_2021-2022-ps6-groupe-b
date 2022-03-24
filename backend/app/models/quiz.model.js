const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Quiz', {
  name: Joi.string().required(),
  description: Joi.string().required(),
  category: Joi.string().required(),
})
