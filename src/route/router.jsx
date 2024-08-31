import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root";

const Home = React.lazy(() => import('../pages/home'));
const Contact = React.lazy(() => import('../pages/contact'));
const About = React.lazy(() => import('../pages/about'));
const Projects = React.lazy(() => import('../pages/projects'));
const Gallery = React.lazy(() => import('../pages/gallery'));



export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            
            {
                path: "/gallery",
                element: <Gallery />
            },
        ]
    }
])