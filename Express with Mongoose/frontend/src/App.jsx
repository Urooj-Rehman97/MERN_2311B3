import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserComponent from './MyComponent/UserComponent/UserComponent'
import GetUser from './MyComponent/GetUser/GetUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <UserComponent></UserComponent> */}
    <GetUser></GetUser>
    </>
  )
}

export default App
