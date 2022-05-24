import React from 'react'
import { Outlet, NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography  from '@mui/material/Typography';
import Box from '@mui/material/Box'


const navLinks = [
  { title: "About", path: "/first" }, {
    title: "Contact", path: '/second'
  }];




const Layout = () => {
  return (
    <>
     <AppBar color='inherit' elevation={0}>
      <Container fixed>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', height: '75px', alignItems: 'center'}}>
          <Box sx={{textDecoration: 'none', color: 'black'}} component={NavLink} to='/'>
            <Typography variant='h5'>Home</Typography>

          </Box>
          
          
          <Box sx={{margin: 0}}>


          {navLinks.map(({ title, path }) => (
                <Box sx={{textDecoration: 'none', color: 'black', padding: '10px'}} key={title} component={NavLink} to={path} style={({ isActive }) => ({
                 
                  background: isActive ? '#ebebe0' : '',
                  borderRadius: isActive ? '10px': ''
                })} >
                  <Typography variant='body'>{title}</Typography>
                </Box>
              ))}


          </Box>

          










        </Box>

      </Container>


    </AppBar>
    
      
<Outlet />


    
    
    
    </>

 













  
  )
}

export default Layout