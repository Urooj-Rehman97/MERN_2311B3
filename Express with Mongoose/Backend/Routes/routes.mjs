import express from 'express'
import { del, getAll, getById, insert, update } from '../Controller/UserController.mjs';
const myroutes = express.Router();

myroutes.post("/create", insert)
myroutes.get("/fetch", getAll)
myroutes.get("/fetch/:Id", getById)
myroutes.put("/update/:Id", update)
myroutes.delete("/delete/:Id", del)

export default myroutes