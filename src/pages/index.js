import React from "react"
import Layout from '../containers/Layout/Layout'
import Header from '../components/Header/Header'
import SEO from "../components/seo"
import '../pages/index.css'
import About from '../components/About/About'
import Professional from '../components/Professional/Professional'
import Creative from '../containers/Creative/Creative'
import System from '../components/System/System'
import Connect from '../components/Connect/Connect'
import Skills from '../components/Skills/Skills'
import Fade from 'react-reveal/Fade';

const IndexPage = () => (
  <React.Fragment>
    <Fade>
      <Header />
      <About />
      <Professional />
      <Creative />
      <System />
      <Skills />
      <Connect />
    </Fade>
  </React.Fragment>
)

export default IndexPage
