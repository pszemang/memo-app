import { configureStore } from '@reduxjs/toolkit'
import user from './reducers/user'

const rootReducer = {
  user
}

const store = configureStore({
  reducer: rootReducer
})

export default store