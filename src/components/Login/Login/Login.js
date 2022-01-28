import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
// import image from '../../../images/natural.jpg';
import {FcGoogle} from 'react-icons/fc';

const image = ('https://i.ibb.co/2Mv3Mfm/image1.jpg')

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {signInWithEmail, user, isLoading, authError, googleSignIn, resetPassword} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
const handleFormSubmit = e => {
    e.preventDefault();
    signInWithEmail(loginData.email, loginData.password, navigate, location);

    e.target.reset();
}
const handleGoogleLogin = () => {
    googleSignIn(navigate, location);
}
    return (
        <>
            <div className=' flex items-center justify-center bg-gray-100 '>
                <div className='py-10'>
                    <h2 className="text-4xl font-bold text-center underline text-amber-700 px-3 pb-5">Login</h2>
                    {isLoading && <div className='flex justify-center items-center py-10'>
                        <button type="button" className="bg-indigo-500 rounded ..." disabled>
                            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                            
                            </svg>
                        </button>
                        </div>}
                    <div className='max-w-4xl bg-white rounded shadow-md m-auto md:flex justify-center items-center md:p-3 mx-8'>
                        <div className='basis-full md:basis-1/2 md:pr-3'>
                            <img className='object-cover' src={image} alt="" />
                            
                        </div>
                        <div className='basis-full md:basis-1/2 pt-3 md:pt-2 px-8'>
                            <h1 className='text-center pt-3'>We are all together</h1>
                            
                            <form onSubmit={handleFormSubmit} className="shadow-md bg-white rounded p-5">
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
                                <h6 className="text-red-700">{authError}</h6>
                                {user.email && <h6 className="text-green-700">Congrats, Login successfully</h6>}
                                <div className='flex items-center justify-between pt-3'>
                                    <button 
                                    type="submit"
                                    className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline-none'>Login</button>
                                    <div onClick={handleGoogleLogin} className='flex justify-center items-center'>
                                        <FcGoogle/>
                                        <button  className="font-bold text-sm text-gray-600 hover:text-orange-600 px-1">Google Sign In</button>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between pt-3'>
                                   <Link to='/register'>New? Want to Register!</Link>
                                   <button onClick={resetPassword} className='inline-block align-baseline font-bold text-orange-700 hover:text-gray-500 ' >Forget password?</button>
                                   
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;