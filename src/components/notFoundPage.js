const React = require('react')
const Link = require('react-router').Link

const NotFoundPage = React.createClass({
  render() {
    return (
      <div>
        <h1>Page Not Found!</h1>
        <p>Whoops! Sorry, these are not the androids you are looking for..</p>
        <p><Link to="/">Back to Home</Link></p>
      </div>
    )
  }
})

module.exports = NotFoundPage

