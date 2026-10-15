import axios from 'axios';
import React, { useEffect, useState } from 'react'

const GetUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try {
            const userdata = await axios.get('http://localhost:3000/api/fetch');
            setUsers(userdata.data)
            setLoading(false)
            console.log("fetch data Successfully")
        } catch (error) {
            console.log(error)
        }
    }

    const deleteUser = async(id)=>{
        if(window.confirm("Are you sure you want to delete this User?")){
            try {
                await axios.delete(`http://localhost:3000/api/delete/${id}`)
                console.log("User Deleted Successfully");
            } catch (error) {
                Console.log(error)
            }
        }
    }
    useEffect(() => {
        getUsers()
    },[])

   

    
    return (
        <div className='container'>
            <div className="row mt-5">
                <h1 className='text-center'>All User</h1>
                {loading?(<h2>Loading.....</h2>):(
                    <table className='table table-bordered'>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                        {users.map((u)=>(
                            
                            <tr key={u._id}> 
                                <td>{u.Name}</td>
                                <td>{u.Email}</td>
                                <td>{u.Password}</td>
                                <td>
                                    <button className='btn btn-warning'>Edit</button>
                                    <button onClick={deleteUser(u._id)} className="btn btn-danger"> Delete</button>
                                </td>
                            </tr>
                        ))}

                    </table>
                    
                
                
                    )}
                                </div>
                                <div className="row mt-5">
                                    <div className="col-6 offset-3">
                                        <button className='btn btn-info w-100'>Add New User</button>
                                    </div>
                                </div>

        </div>
    )
}

export default GetUser
