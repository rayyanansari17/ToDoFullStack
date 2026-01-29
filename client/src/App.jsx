import React from 'react'
import { Routes, Route } from 'react-router'
import Add from './pages/Add.jsx'
import Home from './pages/Home.jsx'
import Edit from './pages/Edit.jsx'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>    
    
    </>
  )
}

export default App
