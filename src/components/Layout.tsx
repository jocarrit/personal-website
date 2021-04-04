import React from 'react'
import GlobalStyles from './GlobalStyles'
import Navbar from './Navbar'
import styled from '../lib/styled'

const Main = styled.main`
  margin: 0 auto;
  padding: 1rem;
  width: 40rem;
  /* display: flex;
  flex-direction: column;
  justify-content:center; */
  align-items:center;
  flex: 1 0 auto;
  
  @media only screen and (max-width: 768px) {
    margin-top: 72px;
    margin-left: 0;
    width: 100%;
  }
`

const Div = styled.div`
  height: 100vh;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const Footer = styled.div`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.grey};
  flex: 0 0 auto;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

const Layout:React.FC<{ children: React.ReactNode}> = ({children}) => {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <Div>
        <Main>
          {children}
        </Main>
        <Footer>
          Made with love and coffee by Jose Carrillo
        </Footer>
      </Div>
    </div>
  )
}

export default Layout
