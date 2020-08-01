import Link from 'next/link'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut, faSpaceShuttle, faTools, faComment } from '@fortawesome/free-solid-svg-icons'

const Nav = styled.nav`
  position: fixed;
  width: 5rem;
  height: 100vh;
  background: ${props => props.theme.navbar};
`

const NavList = styled.ul`
  list-style: none;
  height: 5rem;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

const NavItem = styled.li`
  width: 100%;
`

const NavLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.8rem;
  text-decoration: none;
  align-items: center;
  height: 5rem;
  cursor: pointer;
  filter: opacity(0.7);

  & > svg {
    width: 2rem;
    min-width: 2rem;
    margin: 0 1.5rem;
    font-size: 2rem;
  }

  &:hover {
    background: ${props => props.theme.secondary};
    color: ${props => props.theme.primary};
  }
`

const Logo = styled.li`
  background: ${props => props.theme.logoBackground};
  width: 100%;
`

const LinkText = styled.span`

`

const Navbar:React.FC = () => {
  const theme = useTheme()
  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link href="/">
            <NavLink>
              <FontAwesomeIcon size="lg" icon={faSpaceShuttle} />
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/Work">
            <NavLink>
              <FontAwesomeIcon size="lg" icon={faTools} />
              <LinkText>
                Work
              </LinkText>
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/About">
            <NavLink>
              <FontAwesomeIcon size="lg" icon={faUserAstronaut} />
              <LinkText>
                About
              </LinkText>
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/Contact">
            <NavLink>
              <FontAwesomeIcon size="lg" icon={faComment} />
              <LinkText>
                Say hi!
              </LinkText>
            </NavLink>
          </Link>
        </NavItem>
      </NavList>
    </Nav>
  )
}

export default Navbar
