import express from 'express'
import { home, register } from '../Controllers/myController.mjs'

export const myroutes = express.Router()

myroutes.get("/", home)
myroutes.get("/register", register)

// myroutes.get("/", (req,res)=>{
//     res.send("Routing in ExpressJs");
// })

// myroutes.get('/register', (req,res)=>{
//     res.send("Register Page")
//    })

//    Create routes using route
// myroutes.route.get("/login", (req,res)=>{
//     res.send("Login Page")
// }).post("/login",(req,res)=>{
//     res.send("login with post")
// })
