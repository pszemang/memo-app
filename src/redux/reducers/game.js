import { createReducer, createAction } from '@reduxjs/toolkit'

import { generateGameBoard, POSSIBLE_KEYS } from '../../helpers/generateGameBoard'

export const generateBoard = createAction('GENERATE_BOARD')
export const addHit = createAction('ADD_HIT')

const initialState = { board: null, hits: [], isFinished: false }

const gameReducer = createReducer(initialState, {
  [generateBoard.type]: () => ({...initialState, board: generateGameBoard()}),
  [addHit.type]: (state, { payload }) => {
    state.hits.push(payload)
    if (state.hits.length === POSSIBLE_KEYS.length) {
      state.isFinished = true
    }
  }
})

export default gameReducer
