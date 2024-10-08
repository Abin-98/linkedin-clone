import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

const HeaderOption = ({avatar, Icon, title, onClick}) => {

  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className='headerOption'>
        {Icon && <Icon className='headerOption__icon'/>}
        {avatar && <Avatar className='headerOption__icon' src={avatar}>{user?.email[0].toUpperCase()}</Avatar> }
        <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption