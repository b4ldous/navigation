import React from 'react'
import { Outlet, NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar  from '@mui/material/Toolbar';
import Typography  from '@mui/material/Typography';
import List from '@mui/material/List'
import { ListItemButton, ListItemText } from '@mui/material';
import Divider from '@mui/material/Divider'

const drawerWidth = 1 / 4;


const DesktopComponent = () => {
  return (

      <Box sx={{display: 'flex'}}>
        <AppBar position="fixed" color='inherit' elevation={1}
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">

            <NavLink to='/'> Home</NavLink>
      
          </Typography>
        </Toolbar>


        </AppBar>
        
        
        
                <Drawer  sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left">

        <Toolbar />
        <Divider />

          <List sx={{padding: '10px'}}>
            <ListItemButton component={NavLink} to='/first' style={({ isActive }) => ({
    color: isActive ? '#fff' : '#545e6f',
    background: isActive ? '#7600dc' : '#f0f0f0',
  })}>
              <ListItemText>
                 First
                
                </ListItemText>

            </ListItemButton>

          </List>


        </Drawer>
        <Outlet />

        
        


      </Box>




   
  )
}

export default DesktopComponent