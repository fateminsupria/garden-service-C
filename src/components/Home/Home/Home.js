import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Teams from '../Teams/Teams';
import Careers from '../Careers/Careers';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <MakeAppointment></MakeAppointment>
            <Reviews></Reviews>
            <Blogs></Blogs>
           <Teams></Teams>
         <Careers></Careers>
           <Contact></Contact>
           <Footer></Footer>

</div>
    );
};

export default Home;