import React, { useState } from "react";
  import { AppBar, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Box} from "@mui/material";
  import MenuIcon from '@mui/icons-material/Menu';
  import HomeIcon from '@mui/icons-material/Home';
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {

  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
    <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        

      >

        <Box sx={{width: '300px'}} >


        
          <List>

          
         
<ListItem onClick={() => setOpenDrawer(false)}>
  <ListItemText>
    <NavLink to="/first"   style={({ isActive }) => ({
color: isActive ? '#fff' : '#545e6f',
background: isActive ? '#7600dc' : '#f0f0f0',
})}>First</NavLink>
  </ListItemText>
</ListItem>


</List>




        
        
        </Box>
        
      </Drawer>

      <Outlet />

      <AppBar position="fixed" color="inherit">

        


        <Toolbar>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon/>
      </IconButton>

      <IconButton  to='/' component={NavLink}> 
      <HomeIcon />

      </IconButton>
      

        </Toolbar>
      

        
        


        

        

      


      </AppBar>

      











      <Outlet />
    
    
    </>
  )
}

export default Layout