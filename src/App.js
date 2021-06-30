import React from 'react'
import { BrowserRouter, Route,Switch } from 'react-router-dom'
import Home from './component/Home';
import Quiz from './component/Quiz'
import './App.css'


const App = () => {
  return (
    <>
    <BrowserRouter>
   
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quiz" component={Quiz} />

      </Switch>
  
    
    
    
    </BrowserRouter>

    

      
    </>
  )
}

export default App
