import React from 'react'
import { ScrollRestoration } from 'react-router-dom'
import Portfolio from '../components/sections/portfolio'
import PageHeading from '../components/sections/pageHeading'
import CallToAction from '../components/sections/callToAction'

const Projects = () => {
  return (
    <>
      <PageHeading
        heading={"AI & Software Projects"}
        description={"Explore my portfolio of cutting-edge AI and software engineering projects, delivered for clients and the open-source community. From machine learning models to innovative software solutions, these projects showcase the power of AI in solving real-world problems. I'm always eager to discuss how we can leverage technology to meet your objectives. Feel free to reach out for collaborations or inquiries."}
      />
      <Portfolio />
      <CallToAction/>
      <ScrollRestoration/>
    </>
  )
}

export default Projects