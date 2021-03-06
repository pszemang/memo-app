import React from 'react'
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { Box, TextField, Button } from '@material-ui/core'

import ROUTING_PATHS from "../../routing/routes"
import { addName } from "../../redux/reducers/user"

const Home = () => {
  const { register, handleSubmit, errors } = useForm()
  const history = useHistory()
  const dispatch = useDispatch()

  const onStartGameHandler = ({name}) => {
    dispatch ({type: addName.type, payload: {
      name
    }})
    history.push(ROUTING_PATHS.game)
  }

  const hasInputError = !!errors.name

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gridGap={16}
      component="form"
      onSubmit={handleSubmit(onStartGameHandler)}
    >
      <TextField
        name="name"
        label="User name"
        inputRef={register({ required: true})}
        error={hasInputError}
        helperText={hasInputError && "Name is required."}
      />
      <Button variant="contained" color="primary" type="submit">Start</Button>
    </Box>
  )
}

export default Home