import { Router } from '@reach/router'
import { useSelector } from 'react-redux'

import { Dashboard as DashboardIcon } from '@material-ui/icons'
import PanelLayout from '~/components/layout/layout-panel'
import SolicitationsAdmin from './admin/solicitations/index'
import SolicitationsClient from './client/solicitations/index'
import Profile from './client/profile/index'
import Error404 from '../error/404/index'
import Product from './admin/product/index'
import Category from './admin/category'

export const Menu = [
  {
    title: 'Perfil',
    icon: <DashboardIcon />,
    route: '/profile',
    visibleMenu: true,
    enabled: true,
    component: Profile,
    authorization: ['client']
  },
  {
    title: 'Pedidos',
    icon: <DashboardIcon />,
    route: '/solicitations',
    visibleMenu: true,
    enabled: true,
    component: SolicitationsAdmin,
    authorization: ['administrator']
  },
  {
    title: 'Produto',
    icon: <DashboardIcon />,
    route: '/products',
    visibleMenu: true,
    enabled: true,
    component: Product,
    authorization: ['administrator']
  },
  {
    title: 'Categoria',
    icon: <DashboardIcon />,
    route: '/category',
    visibleMenu: true,
    enabled: true,
    component: Category,
    authorization: ['administrator']
  },
  {
    title: 'Meus pedidos',
    icon: <DashboardIcon />,
    route: '/solicitations',
    visibleMenu: true,
    enabled: true,
    component: SolicitationsClient,
    authorization: ['client']
  }
]

const Admin = () => {
  const typeUser = useSelector((state) => state.auth.user.permissions)
  const rotasAutorizadas = Menu.filter((route) =>
    route.authorization.includes(typeUser)
  )

  return (
    <Router>
      <PanelLayout path="/">
        {rotasAutorizadas.map(({ component: Component, route }, i) => (
          <Component key={i} path={route} />
        ))}
        <Error404 default />
      </PanelLayout>
    </Router>
  )
}

export default Admin
