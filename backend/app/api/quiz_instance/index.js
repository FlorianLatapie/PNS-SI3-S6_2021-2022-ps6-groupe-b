const { Router } = require('express')

const { QuizInstance } = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')

const router = new Router()

router.get('/', (req, res) => {
  try {
    res.status(200)
      .json(QuizInstance.get())
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:quizInstanceId', (req, res) => {
  try {
    res.status(200)
      .json(QuizInstance.getById(req.params.quizInstanceId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {
  try {
    const quizInstance = QuizInstance.create({ ...req.body })
    res.status(201)
      .json(quizInstance)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:quizInstanceId', (req, res) => {
  try {
    res.status(200)
      .json(QuizInstance.update(req.params.quizInstanceId, req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:quizInstanceId', (req, res) => {
  try {
    QuizInstance.delete(req.params.quizInstanceId)
    res.status(204)
      .end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router
