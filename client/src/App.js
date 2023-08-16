

import Header from './components/headers/Headers';
import Home from './components/Home/Home';
import { Box } from '@mui/material';
function App() {
  return (
    <div>
      <Header/>
      <Box style={{marginTop:85}}>
       <Home/>
      </Box>
    </div>
  );
}

export default App;
