import { RiDownloadLine } from '@remixicon/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
    return (
        <section className="call-to-action-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-12">
                        <div className="call-to-action-part wow fadeInUp delay-0-2s text-center">
                            <h2>Ready to Transform Your Tech Project with AI?</h2>
                            <p>Let's collaborate on cutting-edge software development and AI solutions. Available for project-based work and AI consultations to drive innovation in your business.</p>
                            <div className="hero-btns">
                                <Link to="/contact" className="theme-btn call-to-action-button">Innovate Now <i><RiDownloadLine size={16}/></i></Link>
                            </div>
                        </div>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default CallToAction