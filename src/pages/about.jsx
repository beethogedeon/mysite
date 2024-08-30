import React from 'react'
import { ScrollRestoration } from 'react-router-dom';

const AboutCount = React.lazy(() => import('../components/sections/about/aboutCount'));
const Summary = React.lazy(() => import('../components/sections/about/summary'));
const Resume = React.lazy(() => import('../components/sections/resume'));
const Services = React.lazy(() => import('../components/sections/services'));
const CallToAction = React.lazy(() => import('../components/sections/callToAction'));

const About = () => {

  return (
    <>
      <AboutCount />
      <Summary />
      <Resume />
      <Services />
      <CallToAction />
      <ScrollRestoration />
    </>
  )
}

export default About