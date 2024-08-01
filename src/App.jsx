import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Login from './screen/login/Login'
import Layout from './screen/Layout'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<h1>Dashboard</h1>} />
        <Route path='attendances' element={<h1>Attendances</h1>} />
        <Route path='setting' element={<h1>setting</h1>} />
        <Route path='*' element={<h1> page not found ! </h1>} />
      </Route>
    </Routes>
  )

}

export default App
