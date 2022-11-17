import { Router, Redirect } from '@reach/router'

import Layout from '../../components/layout/main/index'
import SignIn from '../auth/signin/index'
import Home from '../portal/home/index'
import Error403 from '../error/403/index'
import Error404 from '../error/404/index'
import Error500 from '../error/500/index'

const Menu = [
  {
    title: 'home',
    icons: '',
    route: '/',
    visibleMenu: true,
    enabled: true,
    component: Home
  },
  {
    title: 'SignIn',
    icons: '',
    route: '/signin',
    visibleMenu: true,
    enabled: true,
    component: SignIn
  },
  {
    title: 'NotAuthorized',
    icons: '',
    route: '/error403',
    visibleMenu: true,
    enabled: true,
    component: Error403
  },
  {
    title: 'NotFound',
    icons: '',
    route: '/error404',
    visibleMenu: true,
    enabled: true,
    component: Error404
  },
  {
    title: 'InternalServerError',
    icons: '',
    route: '/error500',
    visibleMenu: true,
    enabled: true,
    component: Error500
  }
]

const Portal = (props) => {
  return (
    <>
      <Router>
        <Layout path="/">
          {Menu.map(({ component: Component, route, type = '' }, i) => (
            <Component key={i} path={route} type={type} />
          ))}
          <Redirect from="/*" to="/error404" noThrow />
        </Layout>
      </Router>
    </>
  )
}

export default Portal
