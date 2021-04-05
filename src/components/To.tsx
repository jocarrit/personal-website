import styled from "../lib/styled";

const To = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${props => props.theme.secondary};
  transition: 200ms;

  &:hover {
    transform: scale(1.2)
  }
`

export default To