import React from 'react'
import PageHeading from '../components/sections/pageHeading';
import { ScrollRestoration } from 'react-router-dom';

const ContactForm = React.lazy(() => import('../components/sections/contactForm'));

const Contact = () => {
    return (
        <>
            <PageHeading
                heading={"Let's Innovate Together"}
                description={"Have an AI project in mind or need expert software engineering consultation? I'm eager to hear about your ideas and challenges. Fill out the form below, and I'll get back to you within 24 hours to discuss how we can leverage cutting-edge technology to achieve your goals."}
            />
            <ContactForm />
            <ScrollRestoration />
        </>
    )
}

export default Contact