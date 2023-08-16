
import Header from './Components/Header/Header';
import { Box } from '@mui/material';
import Home from './Components/Home/Home'
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
