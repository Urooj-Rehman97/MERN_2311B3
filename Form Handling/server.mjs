import express from 'express'
const app = express()
const port = 3000

const __dirname = import.meta.dirname;
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const users = [];

app.get('/', (req, res) => {
//   res.send('Form Handling in Express')
res.sendFile(__dirname+"/index.html")
})

app.post('/', (req,res)=>{

    const {name, email} = req.body;
    users.push({name, email});
    let result = `
     <h1>Submit Successfully</h1>
     <h2>Registered User: </h2>
     <ul>
     ${users.map(u => `<li>${u.name} - ${u.email}</li>`).join(" ")}
     </ul>
   
    `;
    res.send(result);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
