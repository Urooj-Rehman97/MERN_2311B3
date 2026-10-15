import express from 'express'
import { myroutes } from './routes/routes.mjs'

const app = express()
const port = 3000

app.use(express.json())
app.use("/project", myroutes)
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/register', (req,res)=>{
//  res.send("Register Page")
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
