import React from 'react'
import NavBar from './NavBar'
import Footer from '../Layout/Footer'
import { LandingLayoutWrapper } from '../../Common/Layout'

const Layout = ({ children }) => {
    return (
        <LandingLayoutWrapper>
            <NavBar />
            {children}
            <Footer />
        </LandingLayoutWrapper>
    )
}

export default Layout