import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import image from '../../images/lognimage.jpg';

const AddProduct = () => {
    const {isLoading} = useAuth();
    const [post, setPost] = useState({});
    const [postData, setPostData] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newPost = {...post};
        newPost[field] = value;
        setPost(newPost);
        console.log(field, value);
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        const postInfo = {
            ...post,
            status: "Pending"
        };
        console.log(postInfo)
        fetch('https://still-eyrie-80115.herokuapp.com/posts',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postInfo)
        })
        .then(res => res.json())
        .then(data => {
            setPostData(data);
            if(data.insertedId){

            }
        })
        e.target.reset();
        if(isLoading){
            
        }
    }
    return (
        <div >
            <div className=' flex items-center justify-center bg-gray-100 pt-6 pb-20'>
                <div>
                    <h2 className="text-3xl font-bold text-center underline text-amber-700 p-10">Add Post</h2>
                    {isLoading && <div className='flex justify-center items-center py-10'>
                        <button type="button" className="bg-indigo-500 rounded ..." disabled>
                            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                            
                            </svg>
                        </button>
                        </div>}
                    <div className='max-w-4xl bg-white rounded shadow-md m-auto md:flex justify-center items-center md:p-3 mx-4'>
                        <div className='basis-full md:basis-1/2 md:px-3'>
                            <img className='object-cover' src={image} alt="" />
                            
                        </div>
                        <div className='basis-full md:basis-1/2 pt-3 md:pt-0 px-8'>
                            <h1 className='text-center pt-3'>Post Upload</h1>
                            
                            <form onSubmit={handleFormSubmit} className="shadow-md bg-white rounded p-5">
                                <div>
                                    <label className='block text-gray-700 text-sm font-bold mb-1 mt-2  '>Post Title</label>
                                    <input 
                                    type="text"
                                    name="title" 
                                    onBlur={handleOnBlur} 
                                    className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' 
                                    placeholder='Post Title' 
                                    required/>
                                </div>
                                <div>
                                    <label className='block text-gray-700 text-sm font-bold mb-1 mt-2  '>Post Description</label>
                                    <input 
                                    type="text"
                                    name="description" 
                                    onBlur={handleOnBlur} 
                                    className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' 
                                    placeholder='Post Description' 
                                    required/>
                                </div>
                                <div>
                                    <label className='block text-gray-700 text-sm font-bold mb-1 mt-2  '>Post banner image</label>
                                    <input 
                                    type="url"
                                    name="bannerImage" 
                                    onBlur={handleOnBlur}
                                    className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' 
                                    placeholder='Post Banner Image' 
                                    required/>
                                </div>
                                <div>
                                    <label className='block text-gray-700 text-sm font-bold mb-1 mt-2  '>Post image-1</label>
                                    <input 
                                    type="url"
                                    name="imageOne" 
                                    onBlur={handleOnBlur}
                                    className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' 
                                    placeholder='Post Image-1' 
                                    required/>
                                </div>
                                <div>
                                    <label className='block text-gray-700 text-sm font-bold mb-1 mt-2  '>Post image-2</label>
                                    <input 
                                    type="url"
                                    name="imageTwo" 
                                    onBlur={handleOnBlur}
                                    className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' 
                                    placeholder='Post Image-2' 
                                    required/>
                                </div>
                                <div>
                                    <label className='block text-gray-700 text-sm font-bold mb-1 mt-2  '>Post Category</label>
                                    <input 
                                    type="text"
                                    name="category" 
                                    onBlur={handleOnBlur}
                                    className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' 
                                    placeholder='Post Category' 
                                    required/>
                                </div>
                                <div>
                                    <label className='block text-gray-700 text-sm font-bold mb-1 mt-2  '>Travel Cost</label>
                                    <input 
                                    type="number"
                                    name="cost" 
                                    onBlur={handleOnBlur}
                                    className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' 
                                    placeholder='Travel Cost' 
                                    required/>
                                </div>
                                <div>
                                    <label className='block text-gray-700 text-sm font-bold mb-1 mt-2  '>Travel Info</label>
                                    <input 
                                    type="text"
                                    name="info" 
                                    onBlur={handleOnBlur}
                                    className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' 
                                    placeholder='Travel Info' 
                                    required/>
                                </div>
                                <div>
                                    <label className='block text-gray-700 text-sm font-bold mb-1 mt-2  '>Travel Date</label>
                                    <input 
                                    type="date"
                                    name="date" 
                                    onBlur={handleOnBlur}
                                    className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' 
                                    placeholder='Travel Date' 
                                    required/>
                                </div>
                                <div>
                                    <label className='block text-gray-700 text-sm font-bold mb-1 mt-2  '>Travel Rating</label>
                                    <input 
                                    type="number"
                                    name="rating" 
                                    onBlur={handleOnBlur}
                                    className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' 
                                    placeholder='Travel Rating (1 - 5)' 
                                    required/>
                                </div>
                                <div>
                                    <label className='block text-gray-700 text-sm font-bold mb-1 mt-2  '>Location Address</label>
                                    <input 
                                    type="text"
                                    name="address" 
                                    onBlur={handleOnBlur}
                                    className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' 
                                    placeholder='Location Address' 
                                    required/>
                                </div>
                                {postData.insertedId && <p className='text-green-600 pt-2'>Post upload Successfully</p>}
                                <div className='flex items-center justify-between pt-3'>
                                    <button 
                                    type="submit"
                                    className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline-none'>Submit Post</button>
                                    
                                </div> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>                            
        </div>
    );
};

export default AddProduct;