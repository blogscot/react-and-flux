const React = require('../../node_modules/react/dist/react'),
      Link = require('react-router').Link

const toastr = require('toastr')

const AuthorStore = require('../stores/authorStore')
const AuthorActions = require('../actions/authorActions')
const AuthorList = require('./authorList')

const AuthorPage = React.createClass({
  getInitialState() {
    return {
      authors: AuthorStore.getAllAuthors()
    }
  },
  componentWillMount() {
    AuthorStore.addChangeListener(this.onChange)
  },
  componentWillUnmount() {
    AuthorStore.removeChangeListener(this.onChange)
  },
  onChange() {
    this.setState({ authors: AuthorStore.getAllAuthors() })
  },
  deleteAuthor(id, event) {
    event.preventDefault()
    AuthorActions.deleteAuthor(id)
    toastr.success("Author Deleted")
  },
  render() {
    const createAuthorRow = author => {
      return (
        <tr key={author.id}>
          <td><Link to={"/author/" + author.id}>{author.id}</Link></td>
          <td>{author.firstName} {author.lastName}</td>
          <td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
        </tr>
      )
    }
    return (
      <div>
        <Link to="author" className="btn btn-default">Add Author</Link>
        <AuthorList createAuthorRow={createAuthorRow}
                    authors={this.state.authors}/>
      </div>
    )
  }
})

module.exports = AuthorPage