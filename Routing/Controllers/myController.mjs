 export const home = async(req,res)=>{
  try {
    res.status(200).send("Routing in ExpressJs");
  } catch (error) {
    res.status(404).send("Page Not Found")
  }
 }

 export const register = async(req,res) =>{
    try {
        res.send("Register Page")
    } catch (error) {
        res.send("Error...")
    }
 }