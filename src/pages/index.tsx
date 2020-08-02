import Hello from "../components/Hello"
import styled from '../lib/styled'
import Link from "next/link"

const Div = styled.div`
  margin:auto;
  width: 500px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    margin-left: 0;
    width: 100%;
  }
`

const SayHi = styled.a`
  display: block;
  text-decoration: none;
  text-align: center;
  letter-spacing: 3px;
  cursor: pointer;
  width: 10rem;
  padding: 1rem;
  color: ${props => props.theme.logoBackground};
  border: 1px solid ${props => props.theme.logoBackground};
  transition: 200ms;

    &:hover {
      background: ${props => props.theme.logoBackground};
      color: ${props => props.theme.background};
    }
`

const Home: React.FC = () => {
  return (
    <Div>
      <Hello />
      <h2>My name is Jose Carrillo</h2>
      <p>I'm a web developer based in Costa Rica. I've been developing web interfaces with React for enterprise and IoT apps, but I'm also skilled in back-end development with Laravel PHP and NodeJS.</p>
      <Link href="/Contact">
        <SayHi>
          Say hi!
        </SayHi>
      </Link>
    </Div>
  )
}

export default Home
