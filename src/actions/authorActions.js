'use strict';

const Dispatcher = require('../dispatcher/appDispatcher')
const AuthorApi = require('../api/AuthorApi')
const ActionTypes = require('../constants/actionTypes')

const AuthorActions = {
  initialise() {
    const authors = AuthorApi.getAllAuthors()

    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALISE,
      authors: authors
    })
  },
  createAuthor(author) {
    const newAuthor = AuthorApi.saveAuthor(author)

    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
    })
  },
  updateAuthor(author) {
    const updatedAuthor = AuthorApi.saveAuthor(author)

    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_AUTHOR,
      author: updatedAuthor
    })
  },
  deleteAuthor(id) {
    AuthorApi.deleteAuthor(id)

    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_AUTHOR,
      id: id
    })
  }
}

module.exports = AuthorActions