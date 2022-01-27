import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    //const [userData, setUserData] = useState({});
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        e.preventDefault();
        const user = {email};
        fetch('https://still-eyrie-80115.herokuapp.com/users/admin',{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            //setUserData(data)
            if(data.modifiedCount){
                setSuccess(true);
            }
        })
         e.target.reset();
    }
    return (
        <div className='h-screen flex items-center justify-center bg-gray-100 py-5'>
            <div>
                <h2 className='text-center text-3xl py-5'>Make an Admin</h2>
                <div className='max-w-6xl bg-white rounded shadow-md m-auto md:flex flex-col justify-center items-center p-10 mx-10'>
                    <form onSubmit = {handleAdminSubmit}>
                        <div >
                            <label className='block text-gray-700 text-sm font-bold mb-1 mt-2  '>Your Email</label>
                            <input 
                            type="email"
                            name="email" 
                            onBlur={handleOnBlur} 
                            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' 
                            placeholder='Enter Email' 
                            required/>
                        </div>
                        <div className='text-center'>
                            <button type='submit' className='bg-orange-500 hover:bg-orange-600 mt-2 px-3 py-1 w-full rounded text-bold text-white border'>Make an Admin</button>
                        </div>
                    </form>
                    {success && <p className='text-green-500'>
                        Admin create successfully.    
                    </p>}
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;