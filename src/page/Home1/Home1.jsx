import React from 'react'
import styled from 'styled-components'
import Header from "../Header.jsx"
import CoreServices from './CoreServices.jsx'
import About from './About.jsx'
import Contact from "./Contact.jsx"
import Footer from "../Footer.jsx"
import Expert from "./Expert.jsx"

const Home1 = () => {
  return (
      <Cover>
        <Header />
        <CoreServices />
        <About />
        <Expert />
        <Contact />
        <Footer />
      </Cover>
  )
}

const Cover = styled.div`
  position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export default Home1
