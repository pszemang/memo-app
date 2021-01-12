import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom"

import { Game, Home, Scoreboard, NotFound } from "../pages"
import ROUTING_PATHS from "./routes"

const Router = () =>
  <BrowserRouter>
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
  </BrowserRouter>

export default Router