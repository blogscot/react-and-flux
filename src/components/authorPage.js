const React = require('../../node_modules/react/dist/react')
const ReactDOM = require('../../node_modules/react-dom/dist/react-dom')
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
      <AuthorList createAuthorRow={createAuthorRow}
                  authors={this.state.authors}/>
    )
  }
})

module.exports = AuthorPage