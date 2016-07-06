const React = require('../../node_modules/react/dist/react')

const AuthorForm = require('./authorForm'),
      AuthorApi = require('../api/AuthorApi')


const ManageAuthorPage = React.createClass({
  getInitialState() {
    return {
      author: {
        id: '',
        firstName: '',
        lastName: ''
      }
    }
  },
  setAuthorState(event) {
    const field = event.target.name
    const value = event.target.value
    this.state.author[field] = value
    return this.setState({ author: this.state.author })
  },
  saveAuthor(event) {
    event.preventDefault()
    AuthorApi.saveAuthor(this.state.author)
  },
  render() {
    return (
      <div>
        <AuthorForm
          author={this.state.author}
          onChange={this.setAuthorState}
          onSave={this.saveAuthor} />
      </div>
    )
  }
})

module.exports = ManageAuthorPage
