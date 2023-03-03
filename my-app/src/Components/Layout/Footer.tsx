import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import { bgcolor, padding } from '@mui/system';
import { Fullscreen } from '@mui/icons-material';

const Footer = () => {
  return (
    <div>
      <div  style = {{bottom: 0, position: "absolute", textAlign: "center", backgroundColor:"powderblue", padding:20, width: "100%"}}>
        Made by Aarti
      </div>
    </div>
  )
}

export default Footer
