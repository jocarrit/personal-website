import React from 'react'
import GlobalStyles from './GlobalStyles'
import Navbar from './Navbar'
import styled from '@emotion/styled'

const Main = styled.main`
  margin: 0 auto;
  padding: 1rem;
  height: 100vh;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  
  @media only screen and (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`

const Layout:React.FC<{ children: React.ReactNode}> = ({children}) => {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <Main>
        {children}
      </Main>
    </div>
  )
}

export default Layout
