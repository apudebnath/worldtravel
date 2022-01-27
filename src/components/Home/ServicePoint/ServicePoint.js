import React from 'react';
import image1 from '../../../images/icon1.png';
import image2 from '../../../images/icon2.png';
import image3 from '../../../images/icon3.png';
import image4 from '../../../images/icon4.png';

const ServicePoint = () => {
    return (
        <div className=' flex items-center justify-center bg-opacity-.1 pt-5 pb-10 mx-28 -mt-32'>
            <div className='text-center px-4 md:px-20'>
                <p className='text-3xl font-semibold py-5'>Offer Best Service for You</p>
                <div className="grid grid-cols md:grid-cols-4 gap-10 ">
                    <div className='bg-white p-3 shadow-xl rounded' >
                        <div className='flex justify-center items-center'>
                            <img src={image1} alt="" style={{width: '100px', height: '100px'}}/>
                        </div>
                        <p className='text-xl font-semibold py-3'>
                          Understanding
                        </p>
                        <p>
                          We ensure friendly ecosystem to understand each others. Perfectly concentrate our process and ultimately achieve out goal.
                        </p>
                    </div>
                    <div className='bg-white p-3 shadow-xl rounded' >
                        <div className='flex justify-center items-center'>
                            <img src={image2} alt="" style={{width: '100px', height: '100px'}}/>
                        </div>
                        <p className='text-xl font-semibold py-3'>
                        Best Tour
                        </p>
                        <p>
                          We ensure friendly ecosystem to understand each others. Perfectly concentrate our process and ultimately achieve out goal.
                        </p>
                    </div>
                    <div className='bg-white p-3 shadow-xl rounded' >
                        <div className='flex justify-center items-center'>
                            <img src={image3} alt="" style={{width: '100px', height: '100px'}}/>
                        </div>
                        <p className='text-xl font-semibold py-3'>
                        Local Event
                        </p>
                        <p>
                          We ensure friendly ecosystem to understand each others. Perfectly concentrate our process and ultimately achieve out goal.
                        </p>
                    </div>
                    <div className='bg-white p-3 shadow-xl rounded' >
                        <div className='flex justify-center items-center'>
                            <img src={image4} alt="" style={{width: '100px', height: '100px'}}/>
                        </div>
                        <p className='text-xl font-semibold py-3'>
                        customize Plan
                        </p>
                        <p>
                          We ensure friendly ecosystem to understand each others. Perfectly concentrate our process and ultimately achieve out goal.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePoint;