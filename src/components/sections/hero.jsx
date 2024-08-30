import React from 'react'
import profile from "../../assets/images/about/me.jpg"
import { RiDownloadLine } from '@remixicon/react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section id="home" className="main-hero-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="glitch">
                            <img src={profile} alt="About Me" />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        {/* <!-- START HERO DESIGN AREA --> */}
                        <div className="hero-content wow fadeInUp delay-0-2s">
                            <h1>I'm Gedeon, an AI & Software Engineer driving innovation in tech.</h1>
                            <h2>Specializing in AI solutions and cutting-edge software development to transform digital landscapes.</h2>
                            <div className="hero-btns">
                                <Link to="/contact" className="theme-btn">Download CV <i><RiDownloadLine size={16}/></i></Link>
                            </div>
                        </div>
                        {/* <!-- / END HERO DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero