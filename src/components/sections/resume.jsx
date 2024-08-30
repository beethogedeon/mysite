import React from 'react'

import React from 'react';

const Resume = () => {
    return (
        <div className="resume-area" id="resume">
            <div className="container">
                <div className="container-inner">
                    <Education />
                    <Experience />
                </div>
            </div>
        </div>
    )
}

const Education = () => {
    return (
        <div>
            <div className="row">
                <div className="col-xl-12 col-lg-12">
                    <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                        <h2>Education</h2>
                        <p>Continuous learning and skill development in AI, Software Engineering, and Data Science.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-10">
                    <div className="resume-wrapper wow fadeInUp delay-0-2s">
                        <Card 
                            year="Feb 2023 - Jun 2023"
                            title="Vocational Program in Data Science/AI"
                            institution="Africa TechUp Tour - iSheero, Benin"
                        />
                        <Card 
                            year="Sep 2019 - Oct 2022"
                            title="Bachelor in Computer Science"
                            institution="National School of Applied Economics and Management, Benin"
                            description="GPA: 3.0"
                        />
                        <Card 
                            year="Nov 2022 - May 2023"
                            title="Vocational Program in Artificial Intelligence"
                            institution="Tita Digital Skills, Benin"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Experience = () => {
    return (
        <div>
            <div className="row">
                <div className="col-xl-12 col-lg-12">
                    <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                        <h2>Professional Experience</h2>
                        <p>Proven track record in AI development, software engineering, and IT management.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-10">
                    <div className="resume-wrapper wow fadeInUp delay-0-2s">
                        <Card 
                            year="Jun 2023 - Present"
                            title="AI Engineer"
                            institution="Freelance, Benin"
                            description="Machine Learning - Computer Vision - NLP"
                        />
                        <Card 
                            year="Jul 2023 - Jan 2024"
                            title="IT Manager - Fixed-term job"
                            institution="SONEB, Benin"
                            description="Digitization of archives - Development of internal micro applications for archive management - Management of archive storage on servers"
                        />
                        <Card 
                            year="Jul 2022 - Sep 2022"
                            title="IT Intern"
                            institution="Benin Terminal - Bollore Group, Benin"
                            description="Server virtualization - Network maintenance - Creating and configuring an MPLS network - Implementation of dynamic routing protocols (OSPF, BGP, EIGRP) VPN - Staff support"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Card = ({ year, description, title, institution }) => {
    return (
        <div className="resume-box">
            <span className="resume-date">{year}</span>
            <h5 className="fw-medium">{institution}</h5>
            <span>{title}</span>
            {description && <p>{description}</p>}
        </div>
    )
}

export default Resume;