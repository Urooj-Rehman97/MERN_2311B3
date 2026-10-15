import express from 'express'
import User from '../Models/User.mjs';
//http://localhost:3000/api/create
export const insert = async(req,res)=>{
    try {
        const {Name, Email, Password} = req.body;
         const emailexists = await User.findOne({Email : Email});
         if(emailexists){
            res.send({message: "Email Already Exists"})
         }else{
            const NewUser = new User({
                Name: Name,
                Email: Email,
                Password: Password
            });
            await NewUser.save();
            res.json({"messgae": "User Register Successfully"})
         }
    } catch (error) {
       console.log(error);
       res.json({"Error": error, "Message": "Something went wrong..."})

    }

}

//http://localhost:3000/api/fetch
export const getAll = async(req,res)=>{
   try {
      const data = await User.find({});
      if(data){
         res.send(data);
      }else{
         res.send({message: "No data Found"})
      }
      
   } catch (error) {
      console.log(error);
      res.send(error)
   }
}

//http://localhost:3000/api/fetch/:Id
 export const getById = async(req,res)=>{
   try {
      const id = req.params.Id;
      const singleUser = await User.findById(id);
      if(singleUser){
         res.send(singleUser)
      }else{
         res.json({"error":"User Not Found"})
      }
   } catch (error) {
      console.log(error);
      res.json({"error": error})
   }
}

//http://localhost:3000/api/update/:Id

export const update = async(req,res)=>{
   try {
      const id = req.params.Id;
   const updatedUser = await User.findByIdAndUpdate(id, req.body);
   res.json({"message": "User Updated Successfully"})
   } catch (error) {
      console.log(error);
      res.json({"error":error})
   }
}

//http://localhost:3000/api/delete/:Id

export const del = async(req,res)=>{
   try {
     const id = req.params.Id;
     const deletedUser = await User.findByIdAndDelete(id);
     if(deletedUser){
      res.json({"message": "User Deleted Successfully", "Deleted User": deletedUser})
     }else{
      res.json({"error": "User Not Found"})
     }

   } catch (error) {
      console.log(error);
      res.json({"error": error})
   }
}