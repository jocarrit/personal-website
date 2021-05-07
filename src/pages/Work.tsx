import Title from '../components/Title'
import Container from '../components/Container'
import To from '../components/To'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Card, CardTitle, CardBody, CardLinks, CardMedia } from '../components/Card'
import styled from '../lib/styled'
import Link from 'next/link'
import Image from 'next/image'

type Project = {
  Title: string,
  Description: string,
  Link: URL,
  Github: URL
} 

const ProjectList: Array<Project> =[
  {
    'Title': 'This site...',
    'Description': 'This website have been developed with NextJS and deployed on Vercel.',
    'Link': new URL('https://jocarri.to'),
    'Github': new URL('https://github.com/jocarrit/personal-website'),
  },
  {
    'Title': 'Network as a service Team',
    'Description': 'As a member of the NaaS team on IBM, I have develop Ansible playbooks for managing Infraestructure.',
    'Link': new URL('https://www.ibm.com'),
    'Github': null,
  },
  {
    'Title': 'Mangrove information website',
    'Description': 'A Website for promoting mangroves conservation, made with React, Hugo and Netlify CMS',
    'Link': new URL('https://manglarpuntarenas.netlify.app/'),
    'Github': new URL('https://github.com/jocarrit/mangroove'),
  },
  {
    'Title': 'Fuel Storage Tanks data dashboard',
    'Description': 'A Dashboard for monitoring the fuel storage tanks distributed across the country (Costa Rica), made with ReactJS and NI Labview as backend, IoT gateway and Rest API.',
    'Link': new URL('https://tanks-dashboard.vercel.app'),
    'Github': null,
  },
  {
    'Title': 'Truck and Cistern Weighting System',
    'Description': 'A system for managing the data from a weighting station, made with Laravel PHP and Microsoft SQL Server.',
    'Link': null,
    'Github': null,
  },
]

const CardList = ProjectList.map((project, index) => { return (
  <Card key={ index }>
    <CardBody>
      <CardTitle>{ project.Title }</CardTitle>
      <p>{ project.Description }</p>
      <CardLinks>
        { project.Link && <To target="_blank" href={ project.Link?.toString() } >< FontAwesomeIcon size="1x" icon={ faLink } /></To> }

        { project.Github && <To target="_blank" href={ project.Github?.toString() } ><FontAwesomeIcon size="1x" icon={ faGithub }/></To> }
      </CardLinks>
    </CardBody>
  </Card>
)})

const Work:React.FC = () => {
  return (
    <Container>
      <Title>Work</Title>
        { CardList }
    </Container>
  )
}

export default Work
