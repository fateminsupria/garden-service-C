import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import Danial from '../../../images/gardener1.jpg';
import Jenifer from '../../../images/gardener3.jpg';
import Kady from '../../../images/gardener2.jpg';
import './Blogs.css'


const blogData = [
    {
        title : 'Kitchen Gardener',
        description : ' Kitchen Gardeners International is a non-profit group dedicated to encouraging a sustainable lifestyle through vegetable gardening. Their blog offers encouragement and tips for the novice to experienced vegetable gardener, as well as ideas for activism in your community. The group offers grants to those wanting to start community gardens.  ',
        author:'Mr. Danial',
        authorImg : Danial,
        date : '16 April 2021'
    },
    {
        title : 'Cold Climate Gardening',
        description : ' If you live north of zone 5, this site is for you. Several hardy, knowledgeable gardeners share their advice on gardening in the “cold zone.” Find resources for cold climate gardening, including floating row covers and adapted seeds and find loads of advice on the hardiest varieties for your garden. The blog mostly discusses flowers, although you’ll find a little bit of everything here.  ',
        author:'Mrs. Jenifer',
        authorImg : Jenifer,
        date : '27 April 2021'
    },
    {
        title : 'Brooklyn Farm',
        description : ' If you’re an urban gardener (and even if you’re not), you’ll love this blog, filled with quirky, humorous insights into what it means to garden in the city. One post details the misery of cleaning out raised beds filled with tokens left behind by the neighborhood cats. But, you’ll also find plenty of practical advice on using space wisely and choosing plants for small spaces.    ',
        author:'Mr. Kady',
        authorImg : Kady,
        date : '18 April 2021'
    },
]

const Blogs = () => {
    return (
       <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h2 className="text-success text-uppercase">our blog</h2>
                    <h4>Our Blog News</h4>
               </div>
               <div className="card-deck mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Blogs;