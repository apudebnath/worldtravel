import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import {BsFillStarFill} from 'react-icons/bs';

const Details = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const {user, isLoading} = useAuth();

    // get data database to ui
    useEffect(() => {
        const url = (`https://still-eyrie-80115.herokuapp.com/posts/${id}`)
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [id])

    if(isLoading){
        return <div className='flex justify-center items-center py-10'>
        <button type="button" className="bg-indigo-500 rounded ..." disabled>
            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            
            </svg>
        </button>
        </div>
    }
    return (
        <div className=' flex items-center justify-center bg-gray-100 pb-12'>
            <div>
                <div>
                    <img  src={post.bannerImage} alt=""/>
                </div>
                <div className='px-4 md:px-10'>
                    <h2 className='text-3xl font-semibold py-3'>{post?.title}</h2>
                    <p className='pb-2'>{post?.description}</p>
                    <hr />     
                    <div className='md:flex justify-between items-center'>
                        <div className='basis-full md:basis-3/5 md:flex pt-2'>
                            <div className='basis-full md:basis-1/2 md:pr-1 pt-2'>
                                <img className='object-cover rounded-lg' src={post.imageOne} alt="" />
                            </div>
                            <div className='basis-full md:basis-1/2 md:pl-1 pt-2'>
                                <img className='object-cover rounded-lg' src={post.imageTwo} alt="" />
                            </div>
                        </div>
                        <div className='basis-full md:basis-2/5 md:pl-10 pt-2'>
                            <p className='text-xl font-semibold'>Location: {post?.address}</p>
                            <p className='text-xl font-semibold'>Package: {post?.info}</p>
                            <p className='text-xl font-semibold'>Category: {post?.category}</p>
                            <p className='text-xl font-semibold'>Tour Cost: $ {post?.cost}</p>
                            <div className='flex justify-start items-center '>
                                <p className='text-xl font-semibold pr-2'>Rating: {post?.rating} </p>
                                <BsFillStarFill className='text-orange-500'/>
                            </div>
                            <p className='text-xl font-semibold'>Travel Date: {post?.date}</p>
                        </div>
                    </div>
                </div>
            </div>      
        </div>
    );
};

export default Details;