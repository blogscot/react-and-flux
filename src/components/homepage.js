const React = require('react')
const Link = require('react-router').Link

const HomePage = React.createClass({
  render() {
    return (
      <div className='container-fluid'>
        <div className="Jumbotron">
        <h1>Administration</h1>
        <p>React, React Router and Flux for ultra-responsive Web Apps</p>
        <Link to="about" className="btn btn-primary btn-md">Learn more</Link>
        </div>
      </div>
    )
  }
})

module.exports = HomePage
