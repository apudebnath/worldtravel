import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import Header from '../Header/Header';
import ServicePoint from '../ServicePoint/ServicePoint';


const Home = () => {
    return (
        <div>
           <Header/>
           <ServicePoint/>
           <BlogPost/>

        </div>
    );
};

export default Home;