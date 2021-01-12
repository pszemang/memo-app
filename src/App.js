import Router from './routing/Router'
import {AppBar, Typography, Box} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import MemoryIcon from '@material-ui/icons/Memory'

function App() {
  return (
    <>
    <CssBaseline />
    <Box>
      <AppBar position="static">
        <Box alignItems="center" display="flex" m={1}>
          <Typography variant="h5">Mem</Typography>
          <MemoryIcon />
          <Typography variant="h5">App</Typography>
        </Box>
      </AppBar>
      <Router />
    </Box>
    </>
  );
}

export default App;
