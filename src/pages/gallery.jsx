import React from 'react';
import { ScrollRestoration } from 'react-router-dom';

const Gallery = React.lazy(() => import('../components/sections/gallery'));
const CallToAction = React.lazy(() => import('../components/sections/callToAction'));
const PageHeading = React.lazy(() => import('../components/sections/pageHeading'));

const Galleries = () => {
  return (
    <>
      <PageHeading
        heading={"Gallery"}
        description={"Discover my gallery of images and videos showcasing my work, travels, and experiences. From professional events to personal moments, these images capture the essence of my journey."}
      />
      <Gallery />
      <CallToAction/>
      <ScrollRestoration/>
    </>
  )
}

export default Galleries