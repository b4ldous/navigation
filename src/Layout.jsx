import React from 'react'
import { Outlet, NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AppBar, Typography } from '@mui/material';


const Layout = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
<AppBar>
<Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Typography variant='body' sx={{color: 'white'}}>Menu</Typography>
      </Button>


</AppBar>


      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>

          <NavLink to='/'> Home</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>

        <NavLink to='/first'> first</NavLink>
        </MenuItem>
        
      </Menu>

    











    
      <Outlet />
    
    
    </>
  )
}

export default Layout