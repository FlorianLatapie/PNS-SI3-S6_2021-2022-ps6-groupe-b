const { Router } = require('express')
const QuizzesRouter = require('./quizzes')
const UserRouter = require('./users')
const ImageRouter = require('./images')
const QuizInstanceRouter = require('./quiz_instance')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/quizzes', QuizzesRouter)
router.use('/users', UserRouter)
router.use('/images', ImageRouter)
router.use('/quiz_instance', QuizInstanceRouter)

module.exports = router
