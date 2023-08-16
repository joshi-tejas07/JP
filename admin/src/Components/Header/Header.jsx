import React from 'react'
import Icons from '../../icons/logo.png'
import {AppBar,Toolbar,Typography,Box,styled} from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons';

const StyledHeader= styled(AppBar)`
    background: #ffff00;
    height: 85px;
`; 

const Component= styled(Box)`
 margin-left: 10%;
 margin-bottom:.25%;
 margin-top:.5%;
`;

const Heading=styled(Typography)`
 font-size:20px;
 color:#000000 ;
`;
const Subheading=styled(Typography)`
 font-size:20px;
 font-style:italic;
 color:#000000;
`;

const CustomButtonsWrapper=styled(Box)`
margin:0 0 0 auto;
`;
const Header = () => {
  return (
    <StyledHeader>
        <Toolbar>
            <Component>
                <img src={Icons} alt="logos" style={{width:50}}/>
                <Box style={{display:'flex'}}>
                    <Heading>E-
                        <Subheading component="span" sx={{ fontWeight: 'bold' }}>Shop</Subheading>
                    </Heading>  
                  </Box>
            </Component>
            <Search/>

            <CustomButtonsWrapper>
                <CustomButtons/>
            </CustomButtonsWrapper>
        </Toolbar>
    </StyledHeader>
  )
}

export default Header