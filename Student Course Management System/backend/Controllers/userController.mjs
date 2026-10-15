import express from 'express'
import User from '../Models/User.mjs'
import bcrypt from 'bcrypt'

//http://localhost:3000/project/signUp
export const signUp = async(req,res)=>{
    try {
    const {UserName, UserEmail,UserPassword} = req.body
    const emailexists = await User.findOne({"UserEmail": UserEmail})
    if(emailexists){
        res.send({message: "Email Already Exists"})
    }else{
        const newUser = User({
            "UserName": UserName,
            "UserEmail": UserEmail,
            "UserPassword": bcrypt.hashSync(UserPassword, 10)
        })

        await newUser.save()
        res.send({message: "User Register Successfully"})
    }
    } catch (error) {
        res.send({"Error": error})
        console.log(error)
    }
}

//http://localhost:3000/project/login

export const login = async(req,res)=>{
   try {
    const {UserEmail, UserPassword} = req.body
    const login = await User.findOne({UserEmail})
    if(!login){
        res.send({message: "User Not Found"})
    }else{
        const pwd = await bcrypt.compare(UserPassword, login.UserPassword)
        if(!pwd){
            res.send({message: "Invalid Credentials..."})
        }else{
            res.send({message: "UserLogin Successfully"})
        }
    }
   } catch (error) {
      res.send({"Error": error})
      console.log(error)
   }

}