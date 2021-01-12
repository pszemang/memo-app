import React from 'react'
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Box, TextField, Button } from '@material-ui/core'

import ROUTING_PATHS from "../../routing/routes"

const Home = () => {
  const { register, handleSubmit } = useForm()
  const history = useHistory()

  const onStartGameHandler = (values) => {
    history.push(ROUTING_PATHS.game)
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gridGap={16}
      component="form"
      onSubmit={handleSubmit(onStartGameHandler)}
    >
      <TextField name="name" label="User name" inputRef={register} />
      <Button variant="contained" color="primary" type="submit">Start</Button>
    </Box>
  )
}

export default Home