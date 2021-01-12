import { createReducer, createAction } from '@reduxjs/toolkit'

export const addName = createAction('ADD_NAME')

const initialState = { name: '' }

const userReducer = createReducer(initialState, {
  [addName.type]: (state, { payload: { name }}) => {
    state.name = name
  }
})

export default userReducer
