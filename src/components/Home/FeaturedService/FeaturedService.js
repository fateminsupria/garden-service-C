import React from 'react';
import featured from '../../../images/discover.png';
const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={featured} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Garden Service, on your Term</h1>
                        <p className="text-secondary my-5">
                        To ensure consistent quality for all our projects, we have developed a tried and true 10-step design process. 
                        Whether you’re looking for a large backyard restoration or a small and welcoming front walkway, our design process steps will ensure your satisfaction.
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;