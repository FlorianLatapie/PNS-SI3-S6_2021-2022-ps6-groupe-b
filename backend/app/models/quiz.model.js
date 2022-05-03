const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Quiz', {
  userId: Joi.number().required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  category: {
    id: Joi.number().required(),
    name: Joi.string().required(),
  },
  login: Joi.string().required(),
  password: Joi.string().required(),
})
