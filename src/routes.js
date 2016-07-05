const React = require('../node_modules/react/dist/react')
const ReactRouter = require('react-router')

const AboutPage = require('./components/aboutPage')
const App = require('./components/app')
const AuthorPage = require('./components/authorPage')
const Header = require('./components/header')
const HomePage = require('./components/homePage')
const NotFoundPage = require('./components/notFoundPage')

const Router = ReactRouter.Router
const Route = ReactRouter.Route
const IndexRoute = ReactRouter.IndexRoute
const browserHistory = ReactRouter.browserHistory


const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="about" component={AboutPage} />
      <Route path="authors" component={AuthorPage} />
      <Route path="*" component={NotFoundPage} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Router>
)

module.exports = Routes

