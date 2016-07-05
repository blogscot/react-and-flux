const React = require('react')
const ReactDOM = require('react-dom')
const AuthorApi = require('../api/authorApi')
const AuthorList = require('./authorList')

const Authors = React.createClass({
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
      <AuthorList createAuthorRow={createAuthorRow}
                  authors={this.state.authors}/>
    )
  }
})

module.exports = Authors