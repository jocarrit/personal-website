import Title from '../components/Title'
import Container from '../components/Container';
import styled from '../lib/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faYoutubeSquare, faGithub } from '@fortawesome/free-brands-svg-icons'
import To from '../components/To'

const Social = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px;

`

const Contact:React.FC = () => {
  return (
    <Container>
      <Title>Contact</Title>
      <p>You can go and say Hi on my social media:</p>
      <Social>
        <To target="_blank" href="https://github.com/jocarrit" ><FontAwesomeIcon size="2x" icon={ faGithub }/></To>
        <To target="_blank" href="https://twitter.com/jocarrito" ><FontAwesomeIcon size="2x" icon={ faTwitter }/></To>
        <To target="_blank" href="https://linkedin.com/in/jose-manuel-carrillo-angulo-8ab692a1" ><FontAwesomeIcon size="2x" icon={ faLinkedin }/></To>
        <To target="_blank" href="https://www.youtube.com/channel/UCX8pHxAssyBmQR0G2jyveuA" ><FontAwesomeIcon size="2x" icon={ faYoutubeSquare }/></To>
      </Social>
      <div>

      </div>
    </Container>
  )
}

export default Contact
