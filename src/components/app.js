const React = require('../../node_modules/react/dist/react')
const Header = require('./header')
const RouteHandler = require('react-router').RouteHandler
$ = jQuery = require('jquery')

const App = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    )
  }
})

module.exports = App