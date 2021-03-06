const React = require('../../node_modules/react/dist/react'),
      browserHistory = require('react-router').browserHistory,
      toastr = require('toastr')

const AuthorActions = require('../actions/authorActions')
const AuthorStore = require('../stores/authorStore')

const AuthorForm = require('./authorForm')


const ManageAuthorPage = React.createClass({
  getInitialState() {
    return {
      author: { id: '', firstName: '', lastName: '' },
      errors: {}
    }
  },
  componentWillMount() {
    const authorId = this.props.params.id
    if (authorId) {
      this.setState({ author: AuthorStore.getAuthorById(authorId)})
    }
  },
  setAuthorState(event) {
    const field = event.target.name
    const value = event.target.value
    this.state.author[field] = value
    return this.setState({ author: this.state.author })
  },
  authorFormIsValid() {
    let formIsValid = true
    this.state.errors = {}

    if (this.state.author.firstName.length < 3) {
      this.state.errors.firstName = 'First name must be at least 3 characters'
      formIsValid = false
    }

    if (this.state.author.lastName.length < 3) {
      this.state.errors.lastName = 'Last name must be at least 3 characters'
      formIsValid = false
    }
    this.setState({ errors: this.state.errors })
    return formIsValid
  },
  saveAuthor(event) {
    event.preventDefault()
    if (!this.authorFormIsValid()) {
      return
    }
    if (this.state.author.id) {
      AuthorActions.updateAuthor(this.state.author)
    } else {
      AuthorActions.createAuthor(this.state.author)
    }
    toastr.success('Author Saved')
    browserHistory.push('/authors')
  },
  render() {
    return (
      <div>
        <AuthorForm
          author={this.state.author}
          errors={this.state.errors}
          onChange={this.setAuthorState}
          onSave={this.saveAuthor} />
      </div>
    )
  }
})

module.exports = ManageAuthorPage
