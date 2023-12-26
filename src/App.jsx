import { useState } from 'react'
import './App.css'
import Navbar from './components/navBar/NavBar'
import Header from './containers/header/Header'
import Brand from './components/brand/Brand'
import WhatAI from './containers/whatAI/WhatAI'
import Features from './containers/features/Features'
import Possibility from './containers/possibility/Possibility'
import CTA from './components/cta/Cta'
import Blog from './containers/blog/Blog'
import Footer from './containers/footer/Footer'


// use import shortcut later on

function App() {
  

  return (
      <div className='App'>

        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>

        <Brand/>
        <WhatAI/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>

      </div>
  )
}

export default App


