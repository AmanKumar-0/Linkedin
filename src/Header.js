import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';



function Header() {


  const dispatch = useDispatch();
  const logoutOfApp=() =>{
    dispatch(logout())
    auth.signOut();
  };

  return (
    <div className='header'>
      <div className="header__left">
          <img src="https://img.icons8.com/color/452/linkedin-circled--v1.png" alt="aaa" />
          <div className="header__search">
            <SearchIcon />    
            <input placeholder='Search' type="text" />
          </div>

      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={ChatBubbleOutlineIcon} title='Chats'/>
        <HeaderOption Icon={NotificationsActiveIcon} title='Notifications'/>
        <HeaderOption onClick={logoutOfApp} avatar={true} title='me'/>

      
      
      </div>
    </div>
  )
}

export default Header