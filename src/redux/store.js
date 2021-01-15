import { configureStore } from '@reduxjs/toolkit'
import user from './reducers/user'
import game from './reducers/game'
import scoreboard from './reducers/scoreboard'

const rootReducer = {
  user,
  game,
  scoreboard
}

const store = configureStore({
  reducer: rootReducer
})

export default store