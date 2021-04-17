import React from 'react';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '50px'}} src={service.img} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">Build your own Roof Garden. Our options vary from providing fresh food,
             temperature control,medicinal plants to decorative options - as per your requirement.</p>
             <button className="bookNow" style={{color:'black', background:'greenyellow' }}>Book Now</button>
        </div>
    );
};

export default ServiceDetail;