import Link from 'next/link'
import styled from '../lib/styled'
import { useTheme } from 'emotion-theming'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut, faSpaceShuttle, faTools, faComment } from '@fortawesome/free-solid-svg-icons'

const Nav = styled.nav`
  position: fixed;
  width: 5rem;
  height: 100vh;
  background: ${props => props.theme.navbar};

  @media only screen and (max-width: 768px) {
    height: 5rem;
    width: 100vw;
  }
`

const NavList = styled.ul`
  list-style: none;
  height: 5rem;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`

const NavItem = styled.li`
  width: 100%;
`

const NavLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
  align-items: center;
  height: 5rem;
  cursor: pointer;
  filter: opacity(0.7);
  transition: 200ms;

  & > svg {
    width: 2rem;
    min-width: 2rem;
    margin: 0 1.5rem;
    font-size: 2rem;
  }

  &:hover {
    color: ${props => props.theme.primary};
    font-size: 1rem;
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
                <LinkText>
                  Home
                </LinkText>
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/Work">
            <NavLink>

              <LinkText>
                Work
              </LinkText>
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/About">
            <NavLink>

              <LinkText>
                About
              </LinkText>
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/Contact">
            <NavLink>

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
