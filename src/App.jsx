
import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './Layout/DefaultLayout'
import Home from './Pages/Home'
import About from './Pages/About'

function App() {

  return (
    <>
      <Routes>
        <Route path="/"
          element={<DefaultLayout />}
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
