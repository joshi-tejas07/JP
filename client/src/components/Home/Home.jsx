
import Navbar from './Navbar';
import Banner from './Banners';
import {styled,Box} from '@mui/material';


const Component=styled(Box)`
padding: 10px 10px;
background:#ffff66


`;
const Home = () => {
  return (
    <>
     <Navbar/>
     <Component>
      <Banner/>
     </Component>
    </>
  )
}

export default Home