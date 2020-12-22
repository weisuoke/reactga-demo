import React from 'react'
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom"
import Routes from './Routes'
const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Routes />
      </div>
    </Router>
  )
}

export default App
