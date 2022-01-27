import React, { useEffect, useState } from 'react';
import { Link, } from 'react-router-dom';


const Post = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const url = 'https://still-eyrie-80115.herokuapp.com/posts';
        fetch(url)
        .then(res => res.json())
        .then(data => {
            const restOfPosts = data.filter(post => post.status !== "pending")
                    setPosts(restOfPosts);
        })
    } , [])
console.log(posts);
    return (
        <div className=' flex items-center justify-center bg-gray-100 py-5'>
            <div className='text-center px-4 md:px-10'>
                <h2 className='text-3xl font-semibold py-5'>Exclusive Tour info</h2>
                <div className="grid grid-cols md:grid-cols-3 gap-14 ">
                    {
                        posts.slice(0,12).map(post => <div  key={post._id}>
                            <div className='bg-white p-3 shadow-md rounded'>
                                <div className='basis-full md:basis-1/2'>
                                    <img className='object-cover' src={post.imageOne} alt="" />  
                                </div>
                                <h2 className='h-20 text-2xl font-semibold text-left py-3'>{post.title}</h2>
                                <hr />
                                <div className='h-28 flex justify-between items-center'>
                                    <div className='text-left'>
                                        <p>Location: {post.address}</p>
                                        <p>Package: {post.info}</p>
                                        <p >Price: $ {post.cost}</p>
                                    </div>
                                    <p>
                                        <Link to={`/details/${post._id}`} ><button className='bg-orange-500 hover:bg-orange-600 px-2 py-1 rounded text-white ' >Details</button></Link>
                                    </p>
                                </div>
                            </div>
                          </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Post;