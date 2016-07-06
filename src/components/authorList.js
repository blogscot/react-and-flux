const React = require('../../node_modules/react/dist/react')

const AuthorList = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired,
    createAuthorRow: React.PropTypes.func.isRequired
  },
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
            <th></th>
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