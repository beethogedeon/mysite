import React from 'react'
import CountUp from 'react-countup';

const AboutCount = () => {
    return (
        <section className="single-page-hero-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <h2>About Me</h2>
                        <p>
                            <i>As an AI & Software Engineer with a passion for innovation, I specialize in developing cutting-edge solutions that leverage the power of artificial intelligence to solve complex business challenges. <br /> <br />My expertise spans machine learning, computer vision, and software development, allowing me to create impactful technology that drives real-world results.
                            </i></p>
                    </div>
                </div>
                <div className="row">
                    <Card count={"03"} title={"Years Of Experience"} />
                    <Card count={"05"} endOprion={""} title={"Great Projects Completed"} />
                    <Card count={"01"} title={"Award"} />
                    {/*<Card count={"20"} title={"Cup of coffe"} />*/}
                </div>
            </div>
        </section>
    )
}

export default AboutCount


const Card = ({ count, title, endOprion }) => {
    return (
        <div className="col-6 col-lg-3">
            <div className="hero-counter-area wow fadeInUp delay-0-4s">
                <div className="counter-item counter-text-wrap">
                    <span className="count-text plus"><CountUp end={count}   />{endOprion}</span>
                    <span className="counter-title">{title}</span>
                </div>
            </div>
        </div>
    )
}