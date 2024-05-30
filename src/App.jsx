import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
