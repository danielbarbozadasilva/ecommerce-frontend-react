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
import Client from './admin/client'
import Rating from './admin/rating'

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
    title: 'Categorias',
    icon: <DashboardIcon />,
    route: '/category',
    visibleMenu: true,
    enabled: true,
    component: Category,
    authorization: ['administrator']
  },
  {
    title: 'Produtos',
    icon: <DashboardIcon />,
    route: '/products',
    visibleMenu: true,
    enabled: true,
    component: Product,
    authorization: ['administrator']
  },
  {
    title: 'Clientes',
    icon: <DashboardIcon />,
    route: '/clients',
    visibleMenu: true,
    enabled: true,
    component: Client,
    authorization: ['administrator']
  },
  {
    title: 'Avaliações',
    icon: <DashboardIcon />,
    route: '/rating',
    visibleMenu: true,
    enabled: true,
    component: Rating,
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
