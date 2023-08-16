

import React from 'react'
import {Button,Box,styled, Typography} from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';



const Wrapper=styled(Box)`
  display:flex;
  
  margin: 0 3% 0 auto;
  & > p,& > div{
    margin-right:30px;
    font-size:15px;
    align-items:center;
    color:black;
  }
`;

const ButtonLogin=styled(Button)`
 color:#000;
 background:#ffff;
 font-weight:600;
 text-transform:none;
 padding: 5px 30px;
 border-radius:3px;
 box-shadow:none;
 margin-right:30px;
 &:hover {
    background: #ffff00;
  }
`;

const ContainerBox= styled(Box)`
 display:flex;
 margin-top:10px;
`;

const CustomButtons = () => {
  return (
    <Wrapper>
       <ButtonLogin variant='contained'>Login</ButtonLogin>
       <Typography style={{marginTop:10,width:135}}>Grab The Deals</Typography>
       <Typography style={{marginTop:10}}>More</Typography>

       <ContainerBox>
         <ShoppingCart/>
         <Typography>Cart</Typography>
       </ContainerBox>
    </Wrapper>
  )
}

export default CustomButtons
