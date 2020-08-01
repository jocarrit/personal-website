import styled from "@emotion/styled"

const Big = styled.h1`
  font-size: 8rem;
  color: ${props => props.theme.primary};
  margin: 1rem 0;
`

const Hello:React.FC = () => {
  return (
    <div>
      <Big>Hello <span role="img" aria-label="sheep">👋️</span></Big>
    </div>
  )
}

export default Hello