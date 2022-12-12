import { Router, Redirect } from '@reach/router'

import Layout from '../../components/layout/main/index'
import SignIn from '../auth/signin/index'
import SignUp from '../auth/signup/index'
import RecoveryPassword from '../auth/recoveryPassword/index'
import ChangePassword from '../auth/changePassword/index'
import Home from '../portal/home/index'
import Error403 from '../error/403/index'
import Error404 from '../error/404/index'
import Error500 from '../error/500/index'
import CategoryProducts from '../portal/categories/index'

const Menu = [
  {
    title: 'Home - PrimeTech',
    icons: '',
    route: '/',
    visibleMenu: true,
    enabled: true,
    component: Home
  },{
    title: 'Produtos - PrimeTech',
    icons: '',
    route: '/product/search/:search',
    visibleMenu: true,
    enabled: true,
    component: Home
  },
  {
    title: 'Categorias - PrimeTech',
    icons: '',
    route: '/category/:categoryid',
    visibleMenu: true,
    enabled: true,
    component: CategoryProducts
  },
  {
    title: 'SignIn - PrimeTech',
    icons: '',
    route: '/signin',
    visibleMenu: true,
    enabled: true,
    component: SignIn
  },
  {
    title: 'SignUp - PrimeTech',
    icons: '',
    route: '/signup',
    visibleMenu: true,
    enabled: true,
    component: SignUp
  },
  {
    title: 'Recuperar senha - PrimeTech',
    icons: '',
    route: '/recovery-password',
    visibleMenu: true,
    enabled: true,
    component: RecoveryPassword
  },
  {
    title: 'Recuperar senha - PrimeTech',
    icons: '',
    route: '/change-password',
    visibleMenu: true,
    enabled: true,
    component: ChangePassword
  },
  {
    title: 'Não Autorizado - PrimeTech',
    icons: '',
    route: '/error403',
    visibleMenu: true,
    enabled: true,
    component: Error403
  },
  {
    title: 'Página não existe - PrimeTech',
    icons: '',
    route: '/error404',
    visibleMenu: true,
    enabled: true,
    component: Error404
  },
  {
    title: 'Erro - PrimeTech',
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
          {Menu.map(({ component: Component, route, title, type = '' }, i) => (
            <Component key={i} path={route} type={type} title={title} />
          ))}
          <Redirect from="/*" to="/error404" noThrow />
        </Layout>
      </Router>
    </>
  )
}

export default Portal
