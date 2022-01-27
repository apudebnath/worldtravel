import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import {useLocation, useNavigate } from 'react-router-dom';
import image from '../../images/natural.jpg';
import {FcGoogle} from 'react-icons/fc';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const {registerWithEmail, user, isLoading, authError, googleSignIn} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = {...registerData};
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }
    
    const handleFormSubmit = e => {
        e.preventDefault();
        if(registerData.password !== registerData.confirmPassword){
            alert("Password didn't match! Please enter the same password.")
            return;
        }
        registerWithEmail(registerData.email, registerData.password, registerData.name, navigate)
        e.target.reset();
    }
const handleGoogleLogin = () => {
    googleSignIn(navigate, location);
}
    return (
        <>
            <div className='h-screen flex items-center justify-center bg-gray-100 py-5'>
                <div>
                    <h2 className="text-3xl font-bold text-center underline p text-amber-700 p-3">Register</h2>
                    {isLoading && <div className='flex justify-center items-center py-10'>
                        <button type="button" className="bg-indigo-500 rounded ..." disabled>
                            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                            
                            </svg>
                        </button>
                        </div>}
                    <div className='max-w-4xl bg-white rounded shadow-md m-auto md:flex justify-center items-center md:p-3 mx-10'>
                        <div className='basis-full md:basis-1/2 md:pr-3'>
                            <img className='object-cover' src={image} alt="" />
                            
                        </div>
                        <div className='basis-full md:basis-1/2 pt-3 md:pt-0 px-8'>
                            <h1 className='text-center pt-3'>We are all together</h1>
                            
                            <form onSubmit={handleFormSubmit} className="shadow-md bg-white rounded p-5">
                                <div>
                                    <label className='block text-gray-700 text-sm font-bold mb-1 mt-2  '>Your Name</label>
                                    <input 
                                    type="text"
                                    name="name" 
                                    onBlur={handleOnBlur} 
                                    className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' 
                                    placeholder='Your Name' 
                                    required/>
                                </div>
                                <div>
                                    <label className='block text-gray-700 text-sm font-bold mb-1 mt-2  '>Your Email</label>
                                    <input 
                                    type="email"
                                    name="email" 
                                    onBlur={handleOnBlur} 
                                    className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' 
                                    placeholder='Email' 
                                    required/>
                                </div>
                                <div>
                                    <label className='block text-gray-700 text-sm font-bold mb-1 mt-2'>Password</label>
                                    <input 
                                    type="password"
                                    name="password" 
                                    onBlur={handleOnBlur} 
                                    className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' 
                                    placeholder='Password' 
                                    required/>
                                </div>
                                <div>
                                    <label className='block text-gray-700 text-sm font-bold mb-1 mt-2'>Confirm Password</label>
                                    <input
                                    type="password"
                                    name="confirmPassword" 
                                    onBlur={handleOnBlur} 
                                    className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' 
                                    placeholder='Confirm Password' 
                                    required/>
                                </div>
                                <h6 className="text-red-700">{authError}</h6>
                                {user.email && <h6 className="text-green-700">You are Logged in!</h6>}
                                <div className='flex items-center justify-between pt-3'>
                                    <button 
                                    type="submit"
                                    className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline-none'>Register</button>
                                    <div onClick={handleGoogleLogin} className='flex justify-center items-center'>
                                        <FcGoogle/>
                                        <button  className="font-bold text-sm text-gray-600 hover:text-orange-600 px-1">Google Sign In</button>
                                    </div>
                                    
                                </div>
                                <div className='flex items-center justify-between pt-3 '>
                                   <Link className='text-bold' to='/login'>Already Register! Please Login</Link>
                                   
                                   
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;