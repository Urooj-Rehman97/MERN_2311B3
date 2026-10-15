import { MongoClient } from "mongodb";
import 'dotenv/config'

const url = process.env.Db_connection;
const client = new MongoClient(url);
async function run(){
   try {
     //connect the client to the server
     await client.connect() 
     await client.db("admin").command({ping: 1})
     console.log("Ping your deployment yor are successfully connected")
   } catch (error) {
     console.log(error)
   }
}

export const database = client.db("crud2311b3")