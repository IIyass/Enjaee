import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Wrapper } from '../../Common/Layout'

const Layout = ({ children }) => {

    return (
        <Wrapper>
            <NavBar />
            {children}
            <Footer />
        </Wrapper>
    )
}

export default Layout