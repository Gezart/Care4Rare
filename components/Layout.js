import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children, contactData, mainMenu}) => {
  return (
    <>
    <Header contactData={contactData} mainMenu={mainMenu}/>
        {children}
    <Footer  contactData={contactData} />
    </>
  )
}

export default Layout