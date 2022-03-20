const { Answer } = require('../../../../models')
const NotFoundError = require('../../../../utils/errors/not-found-error.js')
const { getQuestionFromQuiz } = require('../manager')

/**
 * filterAnswersFromQuestion.
 * This function filters among the questions to return only the question linked with the given quizId.
 * @param questionId
 */
const filterAnswersFromQuestion = (questionId) => Answer.get().filter((answer) => (answer.questionId === questionId))

/**
 * getAnswerFromQuestion.
 * This function retrieves an answer from a question. It will throw a not found exception if the questionId in the answer is different from the one provided in parameter.
 * @param quizId
 * @param questionId
 * @param answerId
 */
const getAnswerFromQuestion = (quizId, questionId, answerId) => {
  const question = getQuestionFromQuiz(quizId, questionId)
  const answer = Answer.getById(answerId)
  if (answer.questionId !== question.id) throw new NotFoundError(`${answer.name} id=${answerId} was not found for ${question.name} id=${question.id} : not found`)
  return answer
}

module.exports = {
  getAnswerFromQuestion,
  filterAnswersFromQuestion,
}
