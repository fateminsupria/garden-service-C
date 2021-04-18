import React from 'react';
import img from '../../../images/Team13.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Team = ({gardener}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '200px'}} className="img-fluid mb-3" src={img} alt=""/>
            <h4>Smith Setthy</h4>

            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880181111111</p>
        </div>
    );
};

export default Team;