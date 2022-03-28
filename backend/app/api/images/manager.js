const { Image } = require('../../models')


const buildImage = (filename) => {
  const image = Image.getById(filename)
  return { ...image }
}

const buildImages = () => {
  const images = Image.get()
  return images.map((quiz) => buildImage(quiz.id))
}

module.exports = {
  buildImage,
  buildImages,
}
