import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </Switch>
  )
}

export default Routes
