
import React from 'react'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import { Navigation } from './Components/Navigation'
import HomeComponent from './Components/Home'
import FetchUsers from "./Api/FetchBrukere"
import './styles/main.css'
import MovieCard from './Components/MovieCard'




const App = () => {
  return (  // html strukturen på appen 
    <>
      <header>

        <Navigation />

      </header>

      <main className="main-innhold">
        <BrukerLogin />


      </main>

    </>
    //la inn <article> for visning av filmer.
  )
}

// funksjon for å velge bruker som bruker useNavigate();
const BrukerLogin = () => {
  
  const navigate = useNavigate()

  const brukerValg = (user) => {

    localStorage.setItem ("selectedUser", JSON.stringify(user))

    navigate('/home')

  }

  return(
// Routes i appen
    <Routes> 
      <Route path="/velg-bruker" element={<FetchUsers onUserSelect={brukerValg} />} /> 
      <Route path="/home" element={<HomeComponent />} />
      <Route path="*" element={<Navigate to="/velg-bruker" />} />
    </Routes>
  )
}

export default App
