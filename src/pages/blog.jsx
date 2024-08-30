import React from 'react'
import { ScrollRestoration } from 'react-router-dom';

const PageHeading = React.lazy(() => import('../components/sections/pageHeading'));
const BlogList = React.lazy(() => import('../components/sections/blog/blogList'));
const CallToAction = React.lazy(() => import('../components/sections/callToAction'));

const Blog = () => {
    return (
        <>
            <PageHeading
                heading={"Blog"}
                description={"I write about design, productivity, tech and my creative process. Subscribe to my newsletter to stay in touch. I sync once a month with no spam and ads."}
            />
            <BlogList />
            <CallToAction />
            <ScrollRestoration />
        </>
    )
}

export default Blog