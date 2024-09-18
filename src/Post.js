import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InputOption from './InputOption';

const Post = ({name, description, message,photoUrl}) => {
  return (
    <div className='post'>
        <div className="post__header">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>
        <div className="post__buttons">
            <InputOption Icon={ThumbUpOffAltIcon} title="Like" color='black'/>
            <InputOption Icon={ChatOutlinedIcon} title="Comment" color='black'/>
            <InputOption Icon={ShareOutlinedIcon} title="Share" color='black'/>
            <InputOption Icon={SendOutlinedIcon} title="Send" color='black'/>
        </div>

    </div>
  )
}

export default Post