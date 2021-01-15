import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'

import Board from './Board'

const START_IN_SECONDS = 5

const Game = () => {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const user = useSelector(state => state.user)
  const game = useSelector(state => state.game)
  const dispatch = useDispatch()

  useEffect(() => {
      let timerId
      timerId = setTimeout(() => {
        setIsGameStarted(true)
      }, START_IN_SECONDS * 1000)
      return () => clearTimeout(timerId)
  }, [])

  useEffect(() => {
    dispatch({type: 'GENERATE_BOARD'})
  }, [dispatch])

  return (
    <Box>
      {!isGameStarted ?
        <Typography>{`Hi ${user.name}, game will start in ${START_IN_SECONDS} seconds...`}</Typography> :
        <Board game={game} user={user} />
      }
    </Box>
  )
}

export default Game