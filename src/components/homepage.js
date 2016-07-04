const React = require('react')
const ReactDOM = require('react-dom')

const Home = React.createClass({
  render() {
    return (
      <div className='container-fluid'>
        <div className="Jumbotron">
        <h1>Administration</h1>
        <p>React, React Router and Flux for ultra-responsive Web Appis</p>
        </div>
      </div>
    )
  }
})

module.exports = Home