import React from 'react'
import { ScrollRestoration } from 'react-router-dom'

const Hero = React.lazy(() => import('../components/sections/hero'));
const Portfolio = React.lazy(() => import('../components/sections/portfolio'));
const CallToAction = React.lazy(() => import('../components/sections/callToAction'));

const Home = () => {
  return (
    <>
        <Hero/>
        <Portfolio/>
        {/*<Partners/>*/}
        <CallToAction/>
        <ScrollRestoration/>
    </>
  )
}

export default Home