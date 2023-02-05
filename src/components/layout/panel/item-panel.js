import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import { Link } from '@reach/router'
import { useSelector } from 'react-redux'
import { Menu } from '../../../views/private/index'
import {SListItemIcon, SListItemText} from './styled'

const ListMenu = () => {  
  const { permissions }  = useSelector((state) => state.auth.user)
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }

  const authorizedRoutes = Menu.filter((route) =>
    route.authorization.includes(permissions)
  )

  return (
    <div>
      {authorizedRoutes.map(({ title, route, icon }, i) => (
        <ListItem
          button
          component={Link}
          to={'/private' + route}
          key={i}
          selected={selectedIndex === i}
          onClick={(event) => handleListItemClick(event, i)}
        >
          <SListItemIcon>{icon}</SListItemIcon>
          <SListItemText primary={title} />
        </ListItem>
      ))}
    </div>
  )
}

export default ListMenu
