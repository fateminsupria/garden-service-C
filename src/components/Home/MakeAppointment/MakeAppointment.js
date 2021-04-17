import React from 'react';
// import doctor from '../../../images/discover.png';
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    {/* <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt=""/>
                    </div> */}
                    <div className="col-md-7 text-white py-5">
                        <h5  className="text-success text-uppercase ">Appointment</h5>
                        <h1 className="my-4">Get a quick estimate</h1>
                        <p>Our professionals know how to care for your lawn. With years of experience, 
                            we can keep your landscaping lush and green year-round.</p>
                        <button className="btn btn-success">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;