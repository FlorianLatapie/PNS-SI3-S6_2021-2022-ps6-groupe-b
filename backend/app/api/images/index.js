const { Router } = require('express')

const multer = require('multer')

const { Image } = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')
const { buildImages } = require('./manager')

const router = new Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './database/question-assets/')
  },
  filename(req, file, cb) {
    cb(null, file.originalname)
  },
})

const uploadImg = multer({ storage }).single('image')

router.get('/', (req, res) => {
  try {
    const image = buildImages()
    res.status(200).json(image)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

/* router.get('/:filename', (req, res) => {
  try {
    const filepath = './database/question-assets/test2.png'
    res.sendFile(filepath)
  } catch (err) {
    manageAllErrors(res, err)
  }
}) */

router.post('/', uploadImg, (req, res, next) => {
  try {
    const { file } = req
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
    res.send(file)
    const img = Image.create({ ...req.body })
    res.status(201).json(img)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:imageId', (req, res) => {
  try {
    Image.delete(req.params.imageId)
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router
