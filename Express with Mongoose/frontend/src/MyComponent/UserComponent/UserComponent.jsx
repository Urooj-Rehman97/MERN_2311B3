import React, { useState } from 'react'
import axios from 'axios'



const UserComponent = () => {

    const [userdt, setUserdt] = useState({
        Name : '',
        Email : '',
        Password: ''
     })
     
     const InputChange=(e)=>{
         const {name , value }= e.target;
         setUserdt({
             ...userdt,
             [name]: value
         })
     }
     
     const submitData =async(e)=>{
     try {
         const result = await axios.post('http://localhost:3000/api/create',userdt)
         console.log("User Add Succesfully")
     } catch (error) {
         Console.log(error)
     }
     }
  return (
    <div className='container mt-5'>
      <div className="row mt-5">
        <h1>CRUD in Express using Mongoose</h1>
        <div className="col-6 offset-3">
      
                <input type="text" className="form-control" placeholder='UserName' name="Name" onChange={InputChange}/><br />
                <input type="email" className="form-control" placeholder='UserEmail' name="Email"onChange={InputChange} /><br />
                <input type="password" className="form-control" placeholder='UserPassword' name="Password" onChange={InputChange}/><br />
                <input  className="btn btn-primary w-100" type="submit" value="Add New User" onClick={submitData} />
       
        </div>
      </div>
    </div>
  )
}

export default UserComponent
