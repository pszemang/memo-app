import { AppBar, Typography, Box, Container } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import MemoryIcon from '@material-ui/icons/Memory'
import { withStyles } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
} from "react-router-dom"

import Router from './routing/Router'
import store from './redux/store'

const StyledContainer = withStyles({
  root: {
    padding: 16
  },
})(Container);

const App = () => (
  <>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
        <Box>
          <AppBar position="static">
            <Box alignItems="center" display="flex" m={1}>
              <Typography variant="h5">Mem</Typography>
              <MemoryIcon />
              <Typography variant="h5">App</Typography>
            </Box>
          </AppBar>
          <StyledContainer maxWidth="sm">
            <Router />
          </StyledContainer>
        </Box>
      </BrowserRouter>
    </Provider>
  </>
)


export default App
