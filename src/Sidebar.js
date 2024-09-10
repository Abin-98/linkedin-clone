import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import image from './assets/images/profile-bg.jpg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src={image} alt='profile background'/>
            <Avatar className='sidebar__avatar'/>
            <h2>Abin Varkey</h2>
            <h4>abinvarkey01998@gmail.com</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <div className="sidebar__statNumber">2584</div>
            </div>
            <div className="sidebar__stat">
            <p>Views on post</p>
            <div className="sidebar__statNumber">2210</div>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
        </div>
    </div>
  )
}

export default Sidebar