
import React, { useState } from "react";
  import { AppBar, Drawer, IconButton, List, ListItemText, Toolbar, Divider, ListItemButton} from "@mui/material";
  import MenuIcon from '@mui/icons-material/Menu';
  import HomeIcon from '@mui/icons-material/Home';
  
  import { NavLink, Outlet} from "react-router-dom";


  const navLinks = [
    { title: "First", path: "/first" }];
  



const MobileComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>

<Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}  >
        <List>

        

          
         

          {navLinks.map(({ title, path }) => (
                <ListItemButton button key={title} component={NavLink} to={path} style={({ isActive }) => ({
                  color: isActive ? '#fff' : '#545e6f',
                  background: isActive ? '#7600dc' : '#f0f0f0',
                })}  onClick={() => setOpenDrawer(false)}>
                  <ListItemText primary={title} />
                </ListItemButton>
              ))}


          
         
        </List>
      </Drawer>

      <Outlet />

      <AppBar position="fixed" color="inherit" elevation={0}>


        <Toolbar>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon/>
      </IconButton>

      <IconButton  to='/' component={NavLink}> 
      <HomeIcon />

      </IconButton>
      

        </Toolbar>
        <Divider/>
      

        
        


        

        

      


      </AppBar>

      
      
      
      
    </>
  )
}

export default MobileComponent