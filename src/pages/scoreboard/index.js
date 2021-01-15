import React from 'react'
import {
  Box,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"

import ROUTING_PATHS from "../../routing/routes"

const Scoreboard = () => {
  const scoreboard = useSelector(state => state.scoreboard)
  const history = useHistory()

  const sortedScoreboard = [...scoreboard].sort((a, b) => a.time - b.time)

  console.log(scoreboard)
  return (
    <Box>
    <Box my={2}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push(ROUTING_PATHS.home)}
      >
        New game
      </Button>
    </Box>
    <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Place</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedScoreboard.map((score, index) => {
              return (
                <TableRow key={score.time}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{score.name}</TableCell>
                  <TableCell>{`${(score.time / 1000).toFixed(3)} seconds`}</TableCell>
              </TableRow>
              )
            })}
          </TableBody>
        </Table>
    </TableContainer>
    </Box>
  )
}

export default Scoreboard