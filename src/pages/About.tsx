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
        <p>I have a bachelor degree in Information Technologies Engineering, from <To href="https://www.utn.ac.cr/">UTN Costa Rica</To>, and a Diploma in Industrial Electronics from the same University.</p>
        <h2>Work Experience</h2>
        <p>I am software developer at <To href="https://www.criticalmass.com/">Critical Mass</To> (previously Hangar), I'm part of a team that develops websites and apps for health companies.</p>
        <p>Before I worked for <To href="https://www.kyndryl.com">Kyndryl</To> and <To href="https://www.grupoice.com">Grupo ICE</To>,</p>
        <h2>Interests</h2>
        <p>I really enjoy programming and build web interfaces, but I have a special interest in IA, Blockchain technology and IoT, and I have had the opportunity to give talks about these topics, you can watch them on <To href="https://www.youtube.com/channel/UCX8pHxAssyBmQR0G2jyveuA">YouTube.</To></p>
      </article>
    </Container>
  )
}

export default About
