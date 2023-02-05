import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { SNavbar, SLink, SNavbarLogo, SNavDropdown, SIcon } from './styled'
import LogoHeader from '../../../assets/img/header-image.jpg'
import { Link } from '@reach/router'
import { isAuthenticated, getUser } from '../../../config/auth'
import IconCart from '../../cart/icon/index'
import { logoutAction } from '../../../store/auth/auth.action'
import { useDispatch } from 'react-redux'
import Search from '../../search/index'
import { useLocation } from '@reach/router'

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          textDecoration: isCurrent ? 'underline' : 'none',
          color: '#473F57'
        }
      }
    }}
  />
)

const Header = () => {
  const { name, email } = getUser()
  const dispatch = useDispatch()
  const location = useLocation()

  return (
    <>
      <SNavbar bg="light" expand="lg">
        <Link to="/" id="logoMain">
          <SNavbarLogo src={LogoHeader} alt="logo" />
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            {location.pathname === '/signin' ||
            location.pathname === '/signup' ? (
              ''
            ) : (
              <Search />
            )}

            <Nav className="justify-content-end flex-grow-1 pe-3">
              {isAuthenticated() ? (
                <>
                  <SNavDropdown title={email}>
                    <NavDropdown.Item href="/private/profile">Perfil</NavDropdown.Item>
                    <NavDropdown.Item href="/private/solicitations">Meus pedidos</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => dispatch(logoutAction())}>
                      Sair
                    </NavDropdown.Item>
                  </SNavDropdown>
                  <SLink>
                    <NavLink to="/cart">
                      <SIcon>
                        <IconCart />
                      </SIcon>
                    </NavLink>
                  </SLink>
                </>
              ) : (
                <>
                  <SNavDropdown
                    title="Minha conta"
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item href="/signin">Logar</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/signup">
                      Criar conta
                    </NavDropdown.Item>
                  </SNavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </SNavbar>
    </>
  )
}

export default Header
