import React from 'react';
// import chair from '../../../images/home1.jpg';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: 'green'}}>Your Garden</h1>
                <h3 style={{color: 'grey'}}>We can create an environment that’s beyond your imagination</h3>
                <button style={{border_radius:'10px'}} className="btn btn-success">GET APPOINTMENT</button>
            </div>
            {/* <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div> */}
        </main>
    );
};

export default HeaderMain;