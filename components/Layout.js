import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children, contactData, mainMenu, rightMenu}) => {
  console.log('>>>>>>>>>>>CD', contactData)
  return (
    <>
    <Header contactData={contactData} mainMenu={mainMenu} rightMenu={rightMenu} mobileMenu={contactData.mobileMenu}/>
        {children}
    <Footer  contactData={contactData} />
    </>
  )
}

export default Layout