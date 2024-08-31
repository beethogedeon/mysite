import React from 'react';
import { RiRobotFill, RiEyeFill, RiCustomerService2Fill } from 'react-icons/ri';

const Services = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12">
                    <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                        <h2>Services</h2>
                        <p><i>Cutting-edge AI solutions tailored to transform your business and drive innovation.
                            </i></p>
                    </div>
                </div>
            </div>
            <div className="row">
                <Card 
                    description="Develop intelligent chatbots and conversational AI systems to enhance customer interactions and automate processes."
                    icon={<RiRobotFill size={40} />} 
                    title="Chatbot Development" 
                />
                <Card 
                    description="Create advanced computer vision solutions for image recognition, object detection, and visual data analysis."
                    icon={<RiEyeFill size={40}/>} 
                    title="Computer Vision" 
                />
                <Card 
                    description="Provide expert consultation on AI strategy, implementation, and optimization to help businesses leverage the power of artificial intelligence."
                    icon={<RiCustomerService2Fill size={40}/>} 
                    title="AI Consultation" 
                />
            </div>
        </div>
    );
}

const Card = ({ description, icon, title }) => {
    return (
        <div className="col-md-6 col-lg-4">
    <div className="service-item wow fadeInUp delay-0-2s">
        <div className="icon d-flex justify-content-center align-items-center">
            {icon}
        </div>
        <br />
        <h3 style={{textAlign:"center"}}>{title}</h3>
        <p style={{textAlign:"justify"}}>{description}</p>
    </div>
</div>

    );
}

export default Services;