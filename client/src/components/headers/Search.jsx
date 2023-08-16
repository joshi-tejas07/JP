

import { InputBase ,Box,styled} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'


const SearchContainer=styled(Box)`
 background:#fff; 
 width:45%;
 height:45%;
 margin-left:15px;
 border-radius: 10px ;
 display:flex;
`;

const InputSearchBase= styled(InputBase)`
padding-left:10px;
padding-top:5px;
width:100%;
font-size:unset;
`;

const SearchIconWrapper=styled(Box)`
 color:#000;
 padding:8px;
 display:flex;
`;


const Search = () => {
  return (
    <SearchContainer>
        <InputSearchBase
        placeholder='Search for products and more.....'
        />
        <SearchIconWrapper>
            <SearchIcon/>
        </SearchIconWrapper>
    </SearchContainer>
  )
}

export default Search