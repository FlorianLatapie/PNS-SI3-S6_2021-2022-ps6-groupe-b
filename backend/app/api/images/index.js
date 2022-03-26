const { Router } = require('express')

const multer = require('multer')

const { Image } = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')

const router = new Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, '../../../database/question-assets')
  },
  filename(req, file, cb) {
    cb(null, file.originalname)
  },
})

const uploadImg = multer({ storage }).single('image')

router.post('/', uploadImg, (req, res) => {
  try {
    const img = Image.create({ ...req.body })
    res.status(201).json(img)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router
