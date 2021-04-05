import Title from '../components/Title'
import Container from '../components/Container'
import To from '../components/To'
import styled from '../lib/styled'
import Link from 'next/link'

const Work:React.FC = () => {
  return (
    <Container>
      <Title>Work</Title>
      <article>
        <h2>This site...</h2>
        <p>This website have been developed with NextJS and deployed on Vercel.</p>
        <h2>Network as a service Team</h2>
        <p>As a member of the NaaS team on IBM, I have develop Ansible playbooks for managing Infraestructure.</p>
        <h2>Mangrove information website</h2>
        <p>A Website for promoting mangroves conservation.</p>
        <h2>Fuel Storage Tanks data dashboard</h2>
        <p>An Dashboard for monitoring the fuel storage tanks distributed across the country (Costa Rica), made with ReactJS and <To href="https://www.ni.com/es-cr/shop/labview.html">Labview</To> as an IoT gateway and Rest API.</p>
        <h2>Truck and Cistern Weighting System</h2>
        <p>A system for managing the data from a weighting station, made with Laravel PHP and Microsoft SQL Server.</p>
      </article>
    </Container>
  )
}

export default Work
