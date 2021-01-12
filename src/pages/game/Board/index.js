import React from 'react'
import { Grid } from '@material-ui/core'

import Card from './Card'

const MOCKED_ARRAY = new Array(16).fill('')

const Board = () => {
  return (
    <Grid container spacing={2}>
      {MOCKED_ARRAY.map(() => <Card />)}
    </Grid>
  )
}

export default Board