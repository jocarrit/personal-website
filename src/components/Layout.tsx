import React from 'react'
import GlobalStyles from './GlobalStyles'
import Navbar from './Navbar'


const Layout:React.FC<{ children: React.ReactNode}> = ({children}) => {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
