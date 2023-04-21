import Title from '../components/Title'
import styled from '../lib/styled'
import Container from '../components/Container';
import Link from 'next/link'
import To from '../components/To'

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
    <Container>
      <Title >Hello 👋️</Title>
      <h2>My name is Jose Carrillo</h2>
      <article>
        <p>I'm a software developer, I love to build web apps with the best web technologies like ReactJs, Next, NodeJS and Graphql.</p>
        <p>I enjoy to face new problems and look for the right tool and solution, and never stop learning new technologies every day.</p>
        <p>I have a special interest in web development, Artifitial Inteligence,  Blockchain, and IoT apps.</p>
        <p>Here you can see part of <Link href="/Work"><To>my work</To></Link>, check more <Link href="/About"><To>about me</To></Link> or say hi! on my <Link href="/Contact"><To>social media</To></Link></p>
      </article>
    </Container>
  )
}

export default Home
