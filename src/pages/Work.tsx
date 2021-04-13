import Title from '../components/Title'
import Container from '../components/Container'
import To from '../components/To'
import { Card, CardTitle, CardBody, CardLinks, CardMedia } from '../components/Card'
import styled from '../lib/styled'
import Link from 'next/link'
import Image from 'next/image'

type Project = {
  Title: string,
  Description: string,
  Link: URL,
  Github: URL,
  Image: string
} 

const ProjectList: Array<Project> =[
  {
    'Title': 'This site..',
    'Description': 'This website have been developed with NextJS and deployed on Vercel.',
    'Link': new URL('https://jocarri.to'),
    'Github': new URL('https://github.com/jocarrit/personal-website'),
    'Image': 'my_website.jpg'
  },
  {
    'Title': 'Network as a service Team',
    'Description': 'As a member of the NaaS team on IBM, I have develop Ansible playbooks for managing Infraestructure.',
    'Link': new URL('https://www.ibm.com'),
    'Github': null,
    'Image': ''
  },
  {
    'Title': 'Mangrove information website',
    'Description': 'A Website for promoting mangroves conservation.',
    'Link': new URL('https://manglarpuntarenas.netlify.app/'),
    'Github': new URL('https://github.com/jocarrit/mangroove'),
    'Image': 'mangroove.jpg'
  },
  {
    'Title': 'Fuel Storage Tanks data dashboard',
    'Description': 'A Dashboard for monitoring the fuel storage tanks distributed across the country (Costa Rica), made with ReactJS and <To href="https://www.ni.com/es-cr/shop/labview.html">Labview</To> as an IoT gateway and Rest API.',
    'Link': null,
    'Github': null,
    'Image': ''
  },
  {
    'Title': 'Truck and Cistern Weighting System',
    'Description': 'A system for managing the data from a weighting station, made with Laravel PHP and Microsoft SQL Server.',
    'Link': null,
    'Github': null,
    'Image': ''
  },
]

const CardList = ProjectList.map((project, index) => { return (
  <Card key={ index }>
    <CardBody>
      <CardTitle>{ project.Title }</CardTitle>
      <p>{ project.Description }</p>
      <CardLinks>
        <a href={ project.Link?.toString() }>Link</a>
        <a href={ project.Github?.toString() }>Github</a>
      </CardLinks>
    </CardBody>
    <CardMedia>      
      <Image
        src={ `/media/${ project.Image }` }
        alt='Picture of the author'
        width={3582}
        height={1840}
      />
  </CardMedia>
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
