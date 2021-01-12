import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom"

import { Game, Home, Scoreboard, NotFound } from "../pages"

const ROUTING_PATHS = {
  home: '/',
  game: '/game',
  scoreboard: '/scoreboard',
}

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