import React from 'react';
import { RiRobotFill, RiEyeFill, RiCustomerService2Fill } from 'react-icons/ri';

const Services = () => {
    return (
        <div className="container-inner">
            <div className="row">
                <div className="col-xl-12 col-lg-12">
                    <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                        <h2>AI Services</h2>
                        <p>Cutting-edge AI solutions tailored to transform your business and drive innovation.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <Card 
                    description="Develop intelligent chatbots and conversational AI systems to enhance customer interactions and automate processes."
                    icon={<RiRobotFill size={55} />} 
                    title="Chatbot Development" 
                />
                <Card 
                    description="Create advanced computer vision solutions for image recognition, object detection, and visual data analysis."
                    icon={<RiEyeFill size={55}/>} 
                    title="Computer Vision Projects" 
                />
                <Card 
                    description="Provide expert consultation on AI strategy, implementation, and optimization to help businesses leverage the power of artificial intelligence."
                    icon={<RiCustomerService2Fill size={55}/>} 
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
                <div className="icon">{icon}</div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Services;