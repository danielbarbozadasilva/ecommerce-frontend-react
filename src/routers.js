import React from 'react'
import { Router, Redirect } from '@reach/router'
import { isAuthenticated } from './config/auth'

const PrivateRoute = ({ component: Component, ...rest }) => {
  if (!isAuthenticated()) {
    return <Redirect to="/signin" noThrow />
  }
  return <Component {...rest} />
}

const Routers = () => (
  <>
    <Router>

    </Router>
  </>
)

export default Routers
