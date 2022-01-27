import React from 'react';
import Challenge from '../../challenge/Challenge';
import ExclusiveTour from '../../ExclusiveTour/ExclusiveTour';
import Gallary from '../../Gallary/Gallary';
import BlogPost from '../BlogPost/BlogPost';
import Header from '../Header/Header';
import ServicePoint from '../ServicePoint/ServicePoint';


const Home = () => {
    return (
        <div className='pb-10'>
           <Header/>
           <ServicePoint/>
           <ExclusiveTour/>
           <BlogPost/>
           <Challenge/>
           <Gallary/>

        </div>
    );
};

export default Home;