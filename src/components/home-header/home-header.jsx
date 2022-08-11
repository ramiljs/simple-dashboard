import React from "react";
import { Box , AppBar , Toolbar , TextField , IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

function HomeHeader(){
  return(
    <Box sx={{ flexGrow : 1 , margin : '0 0 10px 240px' }}>
      <AppBar 
        sx={{
          display : 'flex',
          justifyContent : 'center',
          width : '100%',
          height : '70px',
          backgroundColor : '#fff'
        }} 
        position="static"
        >
        <Toolbar variant="dense">
          <IconButton edge="start" aria-label="menu" sx={{ mr : 2 }}>
            <KeyboardBackspaceIcon sx={{ fontSize : '30px' }} />
          </IconButton>
          <TextField 
            id="outlined-basic" 
            label="Search..." 
            variant="outlined" 
            sx={{
              width : '33%'
            }}
          />
          <IconButton edge="start" sx={{ marginLeft : '-45px' }}>
            <SearchOutlinedIcon sx={{ fontSize : '27px' }} />
          </IconButton>
          <IconButton style={{ left: '620px' }}>
            <ShoppingBagOutlinedIcon sx={{ fontSize : '30px' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default HomeHeader;