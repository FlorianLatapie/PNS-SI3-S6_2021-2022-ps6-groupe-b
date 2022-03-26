const Joi = require('joi')
Joi.image = require('joi-image-extension')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Image', {
  name: Joi.string().required(),
  image: Joi.any().required(),
})
