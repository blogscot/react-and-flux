const React = require('react')
const ReactDOM = require('react-dom')

const AuthorList = React.createClass({
  render() {
    const authors = this.props.authors,
          createAuthorRow = this.props.createAuthorRow
    return (
      <div className='container-fluid'>
        <h1>Authors</h1>

        <table className="table">
          <thead>
            <th>ID</th>
            <th>Name</th>
          </thead>
          <tbody>
            {authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    )
  }
})


module.exports = AuthorList