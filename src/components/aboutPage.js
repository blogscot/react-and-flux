const React = require('react')
const ReactDOM = require('react-dom')

const AboutPage = React.createClass({
  render() {
    return (
      <div className="container">
        <h1>About</h1>
        <p>This application uses the following technologies:</p>
          <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Flux</li>
          <li>Node</li>
          <li>Gulp</li>
          <li>Browserify</li>
          <li>Bootstrap</li>
          </ul>
      </div>
    )
  }
})

module.exports = AboutPage