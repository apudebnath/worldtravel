import React from 'react';
import { Link } from 'react-router-dom';

const image = ('https://i.ibb.co/WK0P1qR/heroweb.jpg');
const bannerBackground = {
    background: `url(${image})`,
    backgroundColor: 'rgba(28, 76, 94, 0.5 )',
    backgroundBlendMode: 'darken, luminosity',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}
const Header = () => {
    return (
        <div style={bannerBackground}>
            <div className='h-screen flex justify-center items-center'>
                <div className='text-white '>
                    <p className='text-5xl px-10 text-left'>
                        Travel is the power fo <br/> Refreshment in your LIFE
                    </p>
                    <p className='text-xl px-10 text-left'>
                        Traveling is a most powerful way to maintain and minimize your daily life stress and keep fresh mentally and physically.
                    </p>
                    <p className='px-10'>
                        <Link to="/blog" >
                            <button  className='bg-orange-500 hover:bg-orange-600 rounded px-5 py-2 mt-5'>Know More</button>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;