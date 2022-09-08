import React from 'react'
import alogo from '../../assets/logo.png'
import Sidebuton from './sidebarButton/Sidebuton'
import './sidebar.css'
import { useEffect,useState } from 'react'
import { MdFavorite } from "react-icons/md"
import { FaSearch } from 'react-icons/fa'
import { FaPlay } from 'react-icons/fa'
import { FaGripfire } from 'react-icons/fa'
import { FaSignOutAlt } from 'react-icons/fa'
import {IoLibrary} from "react-icons/io5"
import { MdSpaceDashboard } from 'react-icons/md'

import SpotifyWebApi from 'spotify-web-api-js'
const api = new SpotifyWebApi()
console.log(api)
const Sidebar = () => {
 const [Picture, setPicture] = useState(alogo);
 
  useEffect(() => {
    const Token = localStorage.getItem('token')
    if (Token){
      api.setAccessToken(Token)
      
      console.log(Token);
      
      api.getMe().then((user) => {
        
        console.log(user);
      })
      
    }
  
    // apiClient.get("me").then((user) => {
    //   console.log(user);
    // })
  },[])
 
  return (
    <div className='sidebar-container'>
        <img src={Picture} className='profile-img' alt="Profile-picture" />
      <div>
        <Sidebuton title="Search" to="/feed" icon={<FaSearch/> } />
        <Sidebuton title="Trending" to="/trending" icon={<FaGripfire/>}  />
        <Sidebuton title="Player" to="/player" icon={<FaPlay/>} />
        <Sidebuton title="Favorites" to="/favorites" icon={<MdFavorite/>} />
        <Sidebuton title="Library" to="/" icon={<IoLibrary/>}  />
      </div>
      <Sidebuton title="Sign Out" to="/SignOut" icon={<FaSignOutAlt />} />
    </div>
  )
}

export default Sidebar