import React, { useEffect } from 'react'
import {
  Switch,
  Route,
} from "react-router-dom"
import { useHistory } from "react-router-dom"

import { Game, Home, Scoreboard, NotFound } from "../pages"
import ROUTING_PATHS from "./routes"

const Router = () => {
  const history = useHistory()
  useEffect(() => {
    history.push(ROUTING_PATHS.home)
  }, [history])
  return (
    <Switch>
      <Route exact path={ROUTING_PATHS.home}>
        <Home />
      </Route>
      <Route path={ROUTING_PATHS.game}>
        <Game />
      </Route>
      <Route path={ROUTING_PATHS.scoreboard}>
        <Scoreboard />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )
}

export default Router
