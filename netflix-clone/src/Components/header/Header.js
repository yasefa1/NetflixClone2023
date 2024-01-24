import React from 'react'
import "./header.css"
 import netFlexLogo from "../../Assets/images/10001.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

 function Header() {
  return (
    <div className='header_outer_container'>
      
      <div className='header_container'>
        <div className='header_left'>
          <ul>
            <li> <img src={netFlexLogo} alt='Netflix image' width="100"/> </li>
            
            <li>Home</li>
            
            <li>TV Shows</li>
            
            <li>Movies</li>
            
            <li>New & Popular</li>
            
            <li>MyList</li>
            
            <li>Browse by Languages</li>
          </ul>

        </div>

        <div className='header_right'>
          <ul>
            
            <li><SearchIcon/></li>
            
            <li><NotificationsIcon/></li>
            
            <li> < AccountBoxIcon/> </li>
            
            <li> < ArrowDropDownIcon/> </li> 
          </ul>

        </div>

      </div>
  
    </div>
  )
}

export default Header