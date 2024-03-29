import React from 'react';
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem= (topic)=> (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://sm.ign.com/t/ign_es/screenshot/default/avatar-2-pushed-back-again-but-james-cameron-promises-it-s-w_bkdr.1280.jpg" alt="" />
            
            
            <Avatar src={user.photoUrl} classname="sidebar__avatar">
                {user.email[0]}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
            
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>who viewed you</p>
                <p className='sidebar__statnumber'>2,453</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className='sidebar__statnumber'>2,448</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('Reactjs')}
            {recentItem('Reactjs')}
            {recentItem('Reactjs')}
            {recentItem('Reactjs')}
        </div>
    </div>
  )
}

export default Sidebar