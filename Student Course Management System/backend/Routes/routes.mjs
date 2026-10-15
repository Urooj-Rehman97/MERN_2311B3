import express from 'express'
import { login, signUp } from '../Controllers/userController.mjs'

const myroutes = express.Router()
myroutes.post("/signUp", signUp)
myroutes.post("/login", login)


export default myroutes