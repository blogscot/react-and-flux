const React = require('../../node_modules/react/dist/react')

const AuthorForm = React.createClass({
  render() {
    return (
      <div>
        <form>
          <h1>Manage Author</h1>

          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" className="form-control"
            placeholder="First Name" ref="firstName" value="" />
          <br />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" className="form-control"
            placeholder="Last Name" ref="lastName" value="" />
          <br />

          <input type="submit" value="Save" className="btn btn-default" />
        </form>
      </div>
    )
  }
})

module.exports = AuthorForm
