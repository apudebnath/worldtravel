import React from 'react';
const image1 = ('https://i.ibb.co/qYYVWBc/beach1.jpg');
const image2 = ('https://i.ibb.co/N782ZZd/beach2.jpg');
const image3 = ('https://i.ibb.co/88qDNgS/darjeeling1.jpg');
const image4 = ('https://i.ibb.co/Tw9xqYV/darjeeling2.jpg');
const image5 = ('https://i.ibb.co/zJVpLS3/manali1.jpg');
const image6 = ('https://i.ibb.co/7X75HYd/manali2.jpg');
const image7 = ('https://i.ibb.co/k1pNsxb/kashmir1.jpg');
const image8 = ('https://i.ibb.co/ydRVWtb/kashmir2.jpg');
const Gallary = () => {
    return (
        <div className=' flex items-center justify-center bg-gray-100 py-35 px-10'>
            <div className='text-center'>
                <h2 className='text-3xl py-5'>Our Gallery </h2>
                <div className="grid grid-cols md:grid-cols-4 gap-6 ">
                    <div className='rounded'>
                        <img className='rounded' src={image1} alt="" />
                    </div>
                    <div className='rounded'>
                        <img className='rounded' src={image2} alt="" />
                    </div>
                    <div className='rounded'>
                        <img className='rounded' src={image3} alt="" />
                    </div>
                    <div className='rounded'>
                        <img className='rounded' src={image4} alt="" />
                    </div>
                    <div className='rounded'>
                        <img className='rounded' src={image5} alt="" />
                    </div>
                    <div className='rounded'>
                        <img className='rounded' src={image6} alt="" />
                    </div>
                    <div className='rounded'>
                        <img className='rounded' src={image7} alt="" />
                    </div>
                    <div className='rounded'>
                        <img className='rounded' src={image8} alt="" />
                    </div>
                    <div className='rounded'>
                        <img className='rounded' src={image5} alt="" />
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Gallary;