import React from 'react'
import { Navbar } from '../CommonComponents/Navbar'
import HeroSection from '../CommonComponents/HeroSection'
import Card from '../CommonComponents/Card'

const Home = () => {
  return (
    <div>
<Navbar/>
<HeroSection/>
<div className='mt-20 h-400px flex justify-evenly items-center'>
    <Card/>
    <Card/>
    <Card/>
    {/* <Card/> */}
</div>
    </div>
  )
}

export default Home
