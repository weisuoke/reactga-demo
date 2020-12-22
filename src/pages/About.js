import React, { useEffect } from 'react'
import { Route, useRouteMatch, Link, Switch, useLocation } from 'react-router-dom'
import ReactGA from 'react-ga'

ReactGA.initialize("UA-185887382-1", { debug: true })

const About = () => {
  const { url } = useRouteMatch();
  const location = useLocation()

  useEffect(() => {
    ReactGA.pageview(location.pathname)
  }, [location])
  return (
    <div>
      <Link to={`${url}`}>
        About首页
      </Link>
      <Link to={`${url}/about`}>
        About About页面
      </Link>
      <Switch>
        <Route exact path={`${url}/about`}>
          <div>About About</div>
        </Route>
        <Route path={`${url}`}>
          <div>About Home</div>
        </Route>
      </Switch>
    </div>
  )
}

export default About
