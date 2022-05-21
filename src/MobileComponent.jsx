
import React, { useState } from "react";
  import { AppBar, Drawer, IconButton, List, ListItem, ListItemText, Toolbar} from "@mui/material";
  import MenuIcon from '@mui/icons-material/Menu';
  import HomeIcon from '@mui/icons-material/Home';
  import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
  import { Link, Outlet} from "react-router-dom";

const MobileComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>

<Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>

          <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            <CloseOutlinedIcon />

          </IconButton> {/*You can erase this part of the code, it was just for testing some functionality */}
         
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/first">First</Link>
            </ListItemText>
          </ListItem>
          
         
        </List>
      </Drawer>

      <Outlet />

      <AppBar position="fixed" color="inherit">


        <Toolbar>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon/>
      </IconButton>

      <IconButton  to='/' component={Link}> 
      <HomeIcon />

      </IconButton>
      

        </Toolbar>
      

        
        


        

        

      


      </AppBar>

      
      
      
      
    </>
  )
}

export default MobileComponent