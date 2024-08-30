import React from 'react';
import parse from 'html-react-parser';

const PageHeading = ({heading, description}) => {
    return (
        <section className="single-page-hero-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <h2>{heading}</h2>
                        <p><i>{parse(description)}</i></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageHeading