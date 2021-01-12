import React from 'react'
import { Grid, Card as CardMUI } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const StyledCard = withStyles({
  root: {
    height: 80
  },
})(CardMUI);

const Card = () =>
  <Grid item xs={3}>
    <StyledCard>Test</StyledCard>
  </Grid>

export default Card
