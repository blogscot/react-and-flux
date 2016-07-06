const React = require('react')
const ReactDOM = require('react-dom')
const Routes = require('./routes')
const AuthorActions = require('./actions/authorActions')

AuthorActions.initialise()
ReactDOM.render(Routes, document.getElementById('app'))


