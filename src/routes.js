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
const Redirect = ReactRouter.Redirect
const IndexRoute = ReactRouter.IndexRoute
const browserHistory = ReactRouter.browserHistory

const tooBoring = (nextState, replace) => {
  if (!confirm('Are you sure?')) {
    replace({
      pathname: '/',
      state: { nextState: nextState.location.pathname }
    })
  }
}

const sayGoodbye = (nextState, replace) => confirm('Seeya!')

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="about" component={AboutPage}
        onEnter={tooBoring}
        onLeave={sayGoodbye} />
      <Route path="authors" component={AuthorPage} />
      <Redirect from="/about-us" to="about" />
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Router>
)

module.exports = Routes

