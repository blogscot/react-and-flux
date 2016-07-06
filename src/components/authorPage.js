const React = require('../../node_modules/react/dist/react')
const Link = require('react-router').Link

const AuthorApi = require('../api/authorApi')
const AuthorList = require('./authorList')

const AuthorPage = React.createClass({
  getInitialState() {
    return {
      authors: []
    }
  },
  componentWillMount() {
    this.setState({ authors: AuthorApi.getAllAuthors() })
  },
  render() {
    const createAuthorRow = author => {
      return (
        <tr key={author.id}>
          <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
          <td>{author.firstName} {author.lastName}</td>
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