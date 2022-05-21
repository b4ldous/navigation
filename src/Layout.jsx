import React from 'react'
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import { Outlet, NavLink } from "react-router-dom";
import { Typography } from '@mui/material';

const Layout = () => {
  return (



    <>
    <AppBar color='inherit' position='fixed' elevation={1}>

      <Container fixed>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

          <Box component={NavLink} to='/' sx={{color: 'black', textDecoration: 'none'}}>
            <Typography variant='h6' >Logo</Typography>

          </Box>
          
          
          <Box>
            <Box component={NavLink} to='first' sx={{textDecoration: 'none',color: 'black', '&:hover': {background: 'grey'} }} style={({ isActive }) => ({

background: isActive ? '#f0f5f5' : '', borderBottom: isActive ? '1' : ''
})}>
              <Typography variant='body'>First</Typography>
            </Box>


            
          </Box>


       </Box>



      </Container>


      
    </AppBar>
    

    <Outlet />
    
    
    </>
  )
}

export default Layout