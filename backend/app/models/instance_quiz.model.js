const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('QuizInstance', {
  quizId: Joi.number().required(),
  userId: Joi.number().required(),
  correctAnswers: Joi.number().required(),
  wrongAnswers: Joi.number().required(),
  questions: Joi.array(),
})
