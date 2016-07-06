const React = require('../../node_modules/react/dist/react')

const AuthorForm = React.createClass({
  render() {
    const author = this.props.author,
          onChange = this.props.onChange
    return (
      <div>
        <form>
          <h1>Manage Author</h1>

          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" className="form-control"
            placeholder="First Name" ref="firstName"
            onChange={onChange} value={author.firstName} />
          <br />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" className="form-control"
            placeholder="Last Name" ref="lastName"
            onChange={onChange} value={author.lastName} />
          <br />

          <input type="submit" value="Save" className="btn btn-default" />
        </form>
      </div>
    )
  }
})

module.exports = AuthorForm
