import React from 'react';
import Review from '../Review/Review';
import './Reviews.css';
import Ema from '../../../images/Reviewer1.jpg';
import Liza from '../../../images/Reviewer2.jpg';
import Oishy from '../../../images/Reviewer3.jpg';

const reviewData = [
    {
        quote : 'Highly recommended. ',
        name : 'Ema Weston',
        from : 'New city',
        img : Ema
    },
    {
        quote : 'Highly recommended. ',
        name : 'Liza Katty',
        from : 'California',
        img : Liza
    },
    {
        quote : 'Highly recommended. ',
        name : 'Oishy smith',
        from : 'California',
        img : Oishy
    }
]

const Reviews = () => {
    return (
       <section className="reviews my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h2 className="text-success text-uppercase">Reviews</h2>
                   <h3>What Our Customers <br/> Says </h3>
               </div>
               <div className="card-deck mt-5">
                    {
                        reviewData.map(review => <Review review={review} key={review.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Reviews;