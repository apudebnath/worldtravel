import React from 'react';
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../images/travelLogo.png';

const image = ('https://i.ibb.co/4FRCY7F/banner1.jpg');
const bannerBackground = {
    background: `url(${image})`,
    backgroundColor: 'rgba(1, 28, 38, 0.89 )',
    backgroundBlendMode: 'multiply, luminosity',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    backgroundPosition: 'top',
    backgroundSize: 'cover'
}
const Footer = () => {

    return (
        <div style={bannerBackground} >
                <div className='p-10' >
                    <div className='md:flex justify-between items-center'>
                        <div className='basis-full md:basis-1/4'>
                            <div className='text-white'>
                                <div className='flex justify-left items-center'>
                                    <Link to="/"> 
                                        <img className='w-28 h-20 p-2' src={logo} alt="" />
                                    </Link>
                                    <p className='text-3xl font-bold'>World Travel</p>
                                </div>
                                <p>World Travel is an exclusive and committed organization to spread the information of the Exiting Tour.</p>
                                <div className='flex justify-center items-center space-x-6 text-2xl pt-5 '>
                                    <p className='hover:text-orange-500'><FaFacebook/></p>
                                    <p className='hover:text-orange-500'><FaTwitter/></p>
                                    <p className='hover:text-orange-500'><FaYoutube/></p>
                                    <p className='hover:text-orange-500'><FaInstagram/></p>
                                </div>
                            </div>
                        </div>
                        <div className='text-white'>
                            
                                <p className='text-xl font-semibold pb-2'>Our Process
                                </p>
                            <div className='space-y-1 '>
                                <p>Concentration</p>
                                <p>Basic thinking</p>
                                <p>Secondary Steps</p>
                                <p>Expertise stage</p>
                            </div>
                        </div>
                        <div className='text-white'>
                            <p className='text-xl font-semibold pb-2'>Resources</p>
                            <div className='space-y-1'>
                                <p>Tour Preparation Guide</p>
                                <p>Special site</p>
                                <p>Documentation</p>
                                <p>Special Toolkit</p>
                            </div>
                        </div>
                        <div className='text-white'>
                            <p className='text-xl font-semibold pb-2'>Connect with Us</p>
                            <div className='space-y-1'>
                                <form >
                                    <input
                                    sx={{width: '80%',background: 'white', borderRadius: 1}}
                                    required
                                    label="Your Email"
                                    id="outlined-size-small"
                                    placeholder='Your Email'
                                    name="email"
                                    type="email"
                                    className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                                    />
                                    <button type="submit" className='bg-orange-500 hover:bg-orange-600 rounded px-3 py-1 mt-2'>Send</button>
                                </form>
                                <p>375/5 Destintger, SoctkHome</p>
                                <p>YarestShayer</p>
                                <p>Tel: +022 777 695569</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{color: 'gray'}}/>
            <div className='text-white py-3 text-center'>
            <p >Copyright - &copy;{new Date().getFullYear()} || All rights reserved By - <strong>WorldTravel</strong> || Designed by- ApuDebnath</p>
            </div>
        </div>
    );
};

export default Footer;