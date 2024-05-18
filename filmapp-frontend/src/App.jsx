import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navigation } from './Components/Navigation'
import './styles/main.scss'
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from 'react-router-dom'
import VelgBruker from './Components/Login'
import HomeComponent from './Components/Home';



const App = () => {


  return (

    <Router>

          <Navigation/>
          <AppRoutes/>
    
    </Router>
  )
}


const AppRoutes = () => {
  
  const history = useHistory()

  const brukerValg = (user) => {

    localStorage.setItem ("selectedUser", JSON.stringify(user))

    history.push("/home")

  }

  return(


    <Switch>
      <Route path="/select-user" > 

        <VelgBruker onUserSelect={brukerValg} /> </Route>

      <Route path="/home">

        <HomeComponent /> </Route>

      <Redirect from= "/" to= "/select-user" /> 

    </Switch>
  )
}

export default App
