import React from 'react'
import { Grid, Card as CardMUI } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import ReactCardFlip from 'react-card-flip'
import MemoryIcon from '@material-ui/icons/Memory'

const StyledCard = withStyles({
  root: {
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    cursor: 'pointer'
  },
})(CardMUI);

const Card = ({children, onChoose, isFlipped}) => {
  return (
    <Grid item xs={3}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <StyledCard onClick={onChoose}><MemoryIcon /></StyledCard>
        <StyledCard>{children}</StyledCard>
      </ReactCardFlip>
    </Grid>
  )
}

export default Card
