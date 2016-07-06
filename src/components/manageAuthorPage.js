const React = require('../../node_modules/react/dist/react')
const AuthorForm = require('./authorForm')

const ManageAuthorPage = React.createClass({
  render() {
    return (
      <div>
        <AuthorForm />
      </div>
    )
  }
})

module.exports = ManageAuthorPage
