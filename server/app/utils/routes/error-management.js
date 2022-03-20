const manageAllErrors = (res, err) => {
  if (err.name === 'NotFoundError') {
    res.status(404).end()
  } else if (err.name === 'ValidationError') {
    res.status(400).json(err.extra)
  } else {
    res.status(500).json(err)
  }
}

module.exports = manageAllErrors
