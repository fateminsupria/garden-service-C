import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div class="container">
            <div class="row">
            <div class="footer-col">
            <h4>ABOUT US</h4>
            <ul>
                <li><a>Garden Services provides full and comprehensive services in irrigation, 
                    landscape, maintenance and professional tree care management. 
                    With a fifteen-acre tree farm and nursery, 
                    we provide our customers with quality plants and trees at affordable pricing. 
                    Our lawn care team is trained not only to meet customer expectations, 
                    but to exceed them in every way possible!</a></li>
                </ul>
                </div>
        <div class="footer-col">
            <h4>CONTACT</h4>
            <ul>
                <li><a >grashoper@gmail.com</a></li>
                <li><a >01822222222</a></li>
                <li><a >privacy policy</a></li>
                <li><a >Join our Team</a></li>
                </ul>
                </div>
                <div class="footer-col">
            <h4>SERVICES</h4>
            <ul>
                <li><a >Environmental Stewardship</a></li>
                <li><a >Indoor Area garden</a></li>
                <li><a >Outdoor Area garden</a></li>
                <li><a >Roof Top Area garden</a></li>
                </ul>
                </div>
                <div class="footer-col">
            <h4 style={{color:'grey'}}>© 2021 Garden Services. All Rights Reserved.</h4>
                </div>

                </div>
                </div>
       
       
    
    );
};

export default Footer;