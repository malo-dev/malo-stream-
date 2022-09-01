import React from 'react'
import alogo from '../../assets/alogo.png'
import Sidebuton from './sidebarButton/Sidebuton'
import './sidebar.css'
import { MdFavorite } from "react-icons/md"
import { FaPlay } from 'react-icons/fa'
import { FaGripfire } from 'react-icons/fa'
import { FaSignOutAlt } from 'react-icons/fa'
import {IoLibrary} from "react-icons/io5"
import {MdSpaceDashboard} from 'react-icons/md'
const Sidebar = () => {
 
  return (
    <div className='sidebar-container'>
        <img src={alogo} className='profile-img' alt="Profile-picture" />
      <div>
        <Sidebuton title="Feed" to="/feed" icon={<MdSpaceDashboard/> } />
        <Sidebuton title="Trending" to="/trending" icon={<FaGripfire/>}  />
        <Sidebuton title="Player" to="/player" icon={<FaPlay/>} />
        <Sidebuton title="Favorites" to="/favorites" icon={<MdFavorite/>} />
        <Sidebuton title="Library" to="/librairie" icon={<IoLibrary/>}  />
      </div>
      <Sidebuton title="Sign Out" to="/" icon={<FaSignOutAlt />} />
    </div>
  )
}

export default Sidebar