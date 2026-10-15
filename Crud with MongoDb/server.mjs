import express from 'express'
import {database} from './connection.mjs'
import { ObjectId } from 'mongodb'
const app = express()
const port = 3000

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// create/ insert post
app.post('/create', async(req,res)=>{
   try {
    const {PostTitle, PostName, PostDesc} = req.body;
    const result = await database.collection("posts").insertOne({PostTitle, PostName, PostDesc});
    res.send({result, message:"Post Inserted"})
   } catch (error) {
     res.send(error)
   }
});

// Fetch / get all records
app.get('/get', async(req,res)=>{
  try {
    const data = await database.collection("posts").find().toArray();
    res.send({data})
  } catch (error) {
    console.log(error)
    res.send(error)
  }
});

//getById

app.get('/getById/:Id', async(req,res)=>{
try {
  const id = req.params.Id;
  const singlePost = await database.collection("posts").findOne({_id : new ObjectId(id)});
  res.send({singlePost})
} catch (error) {
  console.log(error);
  res.send(error)
}
});

//update Post
app.put('/update/:Id', async(req,res)=>{
  try {
    const id = req.params.Id;
    const result = await database.collection("posts").findOneAndUpdate({_id : new ObjectId(id)}, {$set: req.body})
    res.send({result, message: "Post Updated Successfully"})
  } catch (error) {
    console.log(error)
    res.send(error)
  }
} );

//delete Post
app.delete('/delete/:Id', async(req,res)=>{
try {
  const id = req.params.Id;
  const result = database.collection("posts").findOneAndDelete({_id : new ObjectId(id)})
  res.send({result, message: "Post Deleted Successfully"})
} catch (error) {
  console.log(error)
  res.send(error)
}
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
