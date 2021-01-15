import { createReducer, createAction } from '@reduxjs/toolkit'

export const addScore = createAction('ADD_SCORE')

const initialState = []

const gameReducer = createReducer(initialState, {
  [addScore.type]: (state, { payload }) => {
    state.push(payload)
  }
})

export default gameReducer
