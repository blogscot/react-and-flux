const React = require('../node_modules/react/dist/react')
const ReactRouter = require('react-router')

const AboutPage = require('./components/aboutPage')
const App = require('./components/app')
const AuthorPage = require('./components/authorPage')
const Header = require('./components/header')
const HomePage = require('./components/homePage')

const Router = ReactRouter.Router
const Route = ReactRouter.Route


const Routes = (
  <Router>
  <Route component={App}>
  <Route path="/" component={HomePage} />
  <Route path="about" component={AboutPage} />
  <Route path="authors" component={AuthorPage} />
  </Route>
  </Router>
)

module.exports = Routes
