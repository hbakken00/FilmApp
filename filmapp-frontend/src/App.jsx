
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { Navigation } from './Components/Navigation';
import VelgBruker from './Components/Login';
import HomeComponent from './Components/Home';
import './styles/main.css'





const App = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main className="main-innhold">
        <AppRoutes />
      </main>
    </>
  )
}


const AppRoutes = () => {
  
  const navigate = useNavigate()

  const brukerValg = (user) => {

    localStorage.setItem ("selectedUser", JSON.stringify(user))

    navigate('/home')

  }

  return(

    <Routes>
      <Route path="/select-user" element={<VelgBruker onUserSelect={brukerValg} />} />
      <Route path="/home" element={<HomeComponent />} />
      <Route path="*" element={<Navigate to="/select-user" />} />
    </Routes>
  )
}

export default App
