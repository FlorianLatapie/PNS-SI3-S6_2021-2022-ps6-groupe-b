/* eslint-disable no-param-reassign */
const fs = require('fs')
const Joi = require('joi')
const logger = require('../utils/logger.js')
const ValidationError = require('./errors/validation-error.js')
const NotFoundError = require('./errors/not-found-error.js')

module.exports = class BaseModel {
  constructor(name, schema) {
    if (!name) throw new Error('You must provide a name in constructor of BaseModel')
    if (!schema) throw new Error('You must provide a schema in constructor of BaseModel')
    this.schema = Joi.object().keys({ ...schema, id: Joi.number().required() })
    this.items = []
    this.name = name
    this.filePath = `${__dirname}/../../database/${this.name.toLowerCase()}.data.json`
    this.load()
  }

  load() {
    try {
      this.items = JSON.parse(fs.readFileSync(this.filePath, 'utf8'))
    } catch (err) {
      if (err.message === 'Unexpected end of JSON input') logger.log(`Warning : ${this.filePath} has wrong JSON format`)
    }
  }

  save() {
    try {
      fs.writeFileSync(this.filePath, JSON.stringify(this.items, null, 2), 'utf8')
    } catch (err) {
      logger.log(`Error while trying to save ${this.name}`)
    }
  }

  get() {
    return this.items
  }

  getById(id) {
    if (typeof id === 'string') id = parseInt(id, 10)
    const item = this.items.find((i) => i.id === id)
    if (!item) throw new NotFoundError(`Cannot get ${this.name} id=${id} : not found`)
    return item
  }

  create(obj = {}) {
    const item = { ...obj, id: Date.now() }
    const { error } = Joi.validate(item, this.schema)
    if (error) throw new ValidationError(`Create Error : Object ${JSON.stringify(obj)} does not match schema of model ${this.name}`, error)
    this.items.push(item)
    this.save()
    return item
  }

  update(id, obj) {
    if (typeof id === 'string') id = parseInt(id, 10)
    const prevObjIndex = this.items.findIndex((item) => item.id === id)
    if (prevObjIndex === -1) throw new NotFoundError(`Cannot update ${this.name} id=${id} : not found`)
    const updatedItem = { ...this.items[prevObjIndex], ...obj }
    const { error } = Joi.validate(updatedItem, this.schema)
    if (error) throw new ValidationError(`Update Error : Object ${JSON.stringify(obj)} does not match schema of model ${this.name}`, error)
    this.items[prevObjIndex] = updatedItem
    this.save()
    return updatedItem
  }

  delete(id) {
    if (typeof id === 'string') id = parseInt(id, 10)
    const objIndex = this.items.findIndex((item) => item.id === id)
    if (objIndex === -1) throw new NotFoundError(`Cannot delete ${this.name} id=${id} : not found`)
    this.items = this.items.filter((item) => item.id !== id)
    this.save()
  }
}
