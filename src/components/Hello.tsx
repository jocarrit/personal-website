import styled from '../lib/styled'

const Big = styled.h1`
  font-size: 100px;
  color: ${props => props.theme.primary};
  margin: 0;

  @media only screen and (max-width: 600px) {
    font-size: 50px;
  } 
`

const Hello:React.FC = () => {
  return (
    <div>
      <Big>Hello <span role="img" aria-label="sheep">👋️</span></Big>
    </div>
  )
}

export default Hello