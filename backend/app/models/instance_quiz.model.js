const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('QuizInstance', {
  num: Joi.number().required(),
  quizId: Joi.number().required(),
  userId: Joi.number().required(),
  stade: Joi.number().required(),
  correctAnswers: Joi.number().required(),
  wrongAnswers: Joi.number().required(),
  questions: Joi.array(),
})
