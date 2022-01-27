import React, { useEffect, useState } from 'react';

const ManageAllPost = () => {
    const [posts, setPosts] = useState([]);
    const [status, setStatus] = useState('');

    const handleChange = e => {
        setStatus(e.target.value);
    }
    // Show all posts from database
    useEffect(() => {
        fetch('http://localhost:5000/posts')
        .then(res => res.json())
        .then(data => {
            setPosts(data);
        })
    } , [])

    // Update Post status
    const handleUpdate = (id) => {  
        fetch(`http://localhost:5000/statusUpdate/${id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status})
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Update Status Successfully')
            }
        })
    }
    // Delete Post
    const handleDelete = (id) => {
        const proceed = window.confirm('Hey, are you SURE! to DELETE the Post?')
        if(proceed){
            fetch(`http://localhost:5000/deletePost/${id}`,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Post deleted successfully')
                    const restOfPosts = posts.filter(post => post._id !== id)
                    setPosts(restOfPosts);
                }
            })
        }
    }
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100 py-5'>
            <div className='text-center'>
                <h2 className='py-5 text-2xl font-semibold'>Manage all Orders</h2>
                <div className=' bg-white rounded shadow-md m-auto md:flex justify-center items-center md:p-5 mx-5'>
                    <table class="table-auto">
                        <thead>
                          <tr>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                            {
                                posts.map(row => ( <tr 
                                    key={row._id}>
                                    <td>{row.title.slice(0,20)}</td>
                                    <td >
                                        <form>
                                            <select
                                                type="text"
                                                value={status} 
                                                onChange={handleChange} 
                                                className='shadow appearance-none border rounded w-full py-1 px-1 mx-3 my-1 text-center text-bold leading-tight focus:outline-none focus:shadow-outline'>
                                                <option>{row.status}</option>
                                                <option>Approved</option>
                                                <option>Reject</option>    
                                            </select>      
                                        </form>
                                    </td>
                                    <td><button onClick={() => handleUpdate(row._id)} className='text-green-600 bg-gray-300 px-1 mx-3 rounded'>Update</button></td>
                                    <td><button onClick={() => handleDelete(row._id)} className='text-red-600 bg-gray-300 px-1 mr-2 rounded'>Delete</button></td>
                                  </tr>))
                            }
                          
                        </tbody>
                    </table>
                            {/* 
                            <TableBody>
                                {
                                    orders.map(row => ( 
                                        <TableRow
                                        key={row._id}
                                        >
                                            <TableCell >
                                                {row.name}
                                            </TableCell>
                                            <TableCell >{row.email}</TableCell>
                                            <TableCell >
                                                <Box >
                                                    <FormControl fullWidth>
                                                      <Label id="demo-simple-select-label">Status</Label>
                                                      <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={status}
                                                        label="Status"
                                                        onChange={handleChange}
                                                      >
                                                        <MenuItem value="pending">Pending</MenuItem>
                                                        <MenuItem value="approved">Approved</MenuItem>
                                                      </Select>
                                                    </FormControl>
                                                </Box>
                                            </TableCell>
                                            <TableCell align="right"><button onClick={() => handleUpdate(row._id)}>Update</button></TableCell>
                                            <TableCell align="right"><button onClick={() => handleDelete(row._id)}>Delete</button></TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody> */}
                </div>
            </div>
        </div>
    );
};

export default ManageAllPost;