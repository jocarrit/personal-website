import Title from '../components/Title'
import styled from '../lib/styled'
import Container from '../components/Container';
import Link from 'next/link'
import To from '../components/To';

const About:React.FC = () => {
  return (
    <Container>
      <Title>About</Title>
      <article>
        <p>I am a proud father and husband, who loves specialty coffee and enjoys to talk and learn about technology.</p>
        <h2>Education</h2>
        <p>I have a bachelor degree in information technology Engineering, from <To href="https://www.utn.ac.cr/">UTN Costa Rica</To>, and a Diploma in industrial electronics from the same University.</p>
        <h2>Work Experience</h2>
        <p>I am a former IBM software developer, I'm part of a team that develops a <i>"Network as a Service"</i> platform for global clients.</p>
        <p>Before I worked for <To href="https://www.grupoice.com">Grupo ICE</To>, the main Costa Rican Electricity generation company, constructing web interfaces for automating some important processes.</p>
        <h2>Interests</h2>
        <p>I really enjoy programming and make web interfaces, but I have a special interest in blockchain technology and IoT, and I have had the opportunity to give talks about these topics, you can watch them on <To href="https://www.youtube.com/channel/UCX8pHxAssyBmQR0G2jyveuA">YouTube.</To></p>
      </article>
    </Container>
  )
}

export default About
