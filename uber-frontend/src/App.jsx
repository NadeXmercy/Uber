import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'

const App = () => {
  return (
    <div>
      <Routes>
        
          <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />}></Route>
        <Route path="/captainlogin" element={<CaptainLogin />}></Route>
        <Route path="/captainsignup" element={<CaptainSignUp />}></Route>
      </Routes>
    </div>
  )
}

export default App
