const Dispatcher = require('../dispatcher/appDispatcher')
const ActionTypes = require('../constants/actionTypes')
const EventEmitter = require('events').EventEmitter
const CHANGE_EVENT = 'change'

let authors = []

const AuthorStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.onChange(CHANGE_EVENT, callback)
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },
  emitChange() {
    this.emit(CHANGE_EVENT)
  },
  getAllAuthors() {
    return authors
  },
  getAuthorById(id) {
    return authors.filter(item => item.id === id)[0]
  }
})

Dispatcher.register((action) => {
  switch (action.actionType) {
    case 'INITIALISE':
      authors = action.authors
      AuthorStore.emitChange()
      break
    case 'CREATE_AUTHOR':
      authors.push(action.author)
      AuthorStore.emitChange()
      break
    case 'UPDATE_AUTHOR':
      const id = action.author.id
      authors[id] = action.author
      AuthorStore.emitChange()
      break
    default:
      console.error('Invalid action type received')
  }
})

module.exports = AuthorStore
