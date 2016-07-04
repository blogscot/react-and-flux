const React = require('react')
const ReactDOM = require('react-dom')
const Home = require('./components/homePage')
const About = require('./components/aboutPage')
const Header = require('./components/header')
const Authors = require('./components/authorPage')

const App = React.createClass({

  render() {
    let Child

    switch(this.props.route) {
      case 'about':
        Child = About
        break
      case 'authors':
        Child = Authors
        break
      default:
        Child = Home
    }
    return (
      <div>
      <Header />
      <Child />
      </div>
    )
  }
})

const render = () => {
  let route = window.location.hash.substr(1)
  ReactDOM.render(<App route={route} />, document.getElementById('app'))
}

window.addEventListener('hashchange', render)
render()

