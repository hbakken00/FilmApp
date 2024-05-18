import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navigation } from './Components/Navigation'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from 'react-router-dom'
import VelgBruker from './Components/Login'


const App = () => {


  return (

    <>
      
          <Navigation/>
          <AppRoutes/>
      
    </>

  )
}

const AppRoutes = () => {
  
  const history = useHistory()

  const brukerSeleksjon = (user) => {
    localStorage.setItem ("selectedUser", JSON.stringify(user))
    history.push("/Home")
  }

  return(
    <Switch>
      <Route path="/select-user" > 

        <VelgBruker onUserSelect={brukerSeleksjon} /> </Route>

      <Route path="/Home">

        <HomeComponent /> </Route>

      <Redirect from= "/" to= "/select-user" /> 

    </Switch>
  )
}

export default App
