import React from 'react';
import image1 from '../../images/icon5.png';
import image4 from '../../images/natural.jpg';


const ExclusiveTour = () => {
    return (
        <div className=' flex items-center justify-center bg-opacity-.1 pt-10 pb-16 px-4 md:px-10'>
            <div className='grid grid-cols md:grid-cols-2 gap-10'>
                    <div >
                        <h2 className='text-xl'>Easy and Enjoy</h2>
                        <h2 className='text-4xl font-bold'>Share your Exclusive tour session <br /> with our community</h2>
                        <div className='flex justify-center items-center p-10'>
                            <div className='p-5'>
                                <img src={image1} alt="" className='object-cover'/>
                            </div>
                            <div>
                                <h2 className='text-xl font-bold'>
                                  You are the best
                                </h2>
                                <p>
                                  We ensure friendly ecosystem to understand each others. Perfectly concentrate our process and ultimately achieve out goal.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div  >
                        <div>
                            <div className='p-12 bg-gray-50 rounded-md'>
                                <img className='rounded-md' src={image4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ExclusiveTour;