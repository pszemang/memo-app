import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'
import Timer from 'react-compound-timer'

import Card from './Card'
import ROUTING_PATHS from "../../../routing/routes"

const Board = ({ game, user }) => {
  const [startTimestamp, setStartTimestamp] = useState(null)
  const [firstChoice, setFirstChoice] = useState(null)
  const [secondChoice, setSecondChoice] = useState(null)
  const dispatch = useDispatch()
  const history = useHistory()

  const onChoose = (key, index) => {
    if (!firstChoice) {
      setFirstChoice({key, index})
    } else {
      setSecondChoice({key, index})
    }
  }

  useEffect(() => {
    setStartTimestamp(Date.now())
  }, [])

  useEffect(() => {
    if (game.isFinished) {
      dispatch({type: 'ADD_SCORE', payload:{
        time: Date.now() - startTimestamp,
        name: user.name
      }})
      history.push(ROUTING_PATHS.scoreboard)
    }
  }, [startTimestamp, game.isFinished, dispatch, user.name, history])

  useEffect(() => {
    if(!!firstChoice && firstChoice.key === secondChoice?.key) {
      dispatch({type: 'ADD_HIT', payload: firstChoice.key})
    }
    if(!!firstChoice && !!secondChoice && firstChoice.key !== secondChoice.key) {
      setTimeout(() => {
        setFirstChoice(null)
        setSecondChoice(null)
      }, 1000)
    }
  }, [firstChoice, secondChoice, dispatch])

  return (
    <>
      <Timer>
        <Timer.Seconds formatValue={value => `Your time: ${value} seconds`} />
      </Timer>
      <Grid container spacing={2}>
        {game.board.map((cardKey, index) =>
          <Card
            key={index}
            isFlipped={index === firstChoice?.index || index === secondChoice?.index || game.hits.some(hit => hit === cardKey)}
            onChoose={() => onChoose(cardKey, index)}
          >
            {cardKey}
          </Card>)
        }
      </Grid>
    </>
  )
}

export default Board