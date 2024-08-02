import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Login from './screen/login/Login'
import Layout from './screen/Layout'
import PageNotFound from './screen/PageNotFound'
import supabase from './supabase'
import Register from './screen/login/Register'

const App = () => {

  const [session, setSession] = useState( true )

  useEffect(()=>{

    supabase.auth.getSession()
    .then(({data : { session }})=>{
      setSession(session)
    })

    const {
      data : { subscription }
    } = supabase.auth.onAuthStateChange((_event, session)=>{
      setSession(session)
    })

    return ()=> subscription.unsubscribe()

  }, []) 

  if (session) {
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

  return(
    <Routes>
      <Route path='/' element={ <Login /> } />
      <Route path='register' element={ <Register /> } />
      <Route path='*' element={ <PageNotFound /> } />
    </Routes>
  )

}

export default App
