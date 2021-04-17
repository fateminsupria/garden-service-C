import React from 'react';
import outdoor from '../../../images/discover.jpg';
import indoor from '../../../images/gratia.png';
import rooftop from '../../../images/rooftop.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Outdoor Area',
        img: outdoor
    },
    {
        name: 'Indoor Area',
        img: indoor
    },
    {
        name: 'Roof Top Area',
        img: rooftop
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h2 style={{color: 'green'}}>SEE OUR SERVICES</h2>
                <h3>Our services are designed to cater your every planting need. </h3>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;