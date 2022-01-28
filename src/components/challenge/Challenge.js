import React from 'react';
import { Link } from 'react-router-dom';

const image = ('https://i.ibb.co/gS41C0z/darjeeling-Banner.jpg');
const bannerBackground = {
    background: `url(${image})`,
    backgroundColor: 'rgba(28, 76, 94, 0.5 )',
    backgroundBlendMode: 'darken, luminosity',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}
const Challenge = () => {
    return (
        <div style={bannerBackground}>
            <div className='h-96 flex justify-center items-center px-10'>
                <div className='text-white'>
                    <p className='text-5xl'>
                    Tour on Demand
                    </p>
                    <p className='text-xl'>
                    Take your Tour to the next level with our on-going Travel challenges.
                    </p>
                    <Link to="/blog" >
                        <button  className='bg-orange-500 hover:bg-orange-600 rounded px-5 py-2 mt-5'>Know More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Challenge;