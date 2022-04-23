const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Question', {
  label: Joi.string(),
  images: Joi.array().required(),
  quizId: Joi.number(),
  answers: Joi.array(),
  familyLink: Joi.string(),
})
