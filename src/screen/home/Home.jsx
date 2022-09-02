import React from 'react'
import './Home.css' 
import Login from '../../components/Login/Login'
import Sidebar from '../../components/sidebar'
import Librairie from '../Library/Librairie'
import Favorie from '../Favorie/Favorie'
import Seach from '../Search/Seach'
import Feed from '../Feed/Feed'
import Player from '../PLayer/Player'
import Trending from '../Trending/Trending'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const Home = () => {
  return (
	  <Router>
		  <div className='main-body'>
			  <Sidebar/>
			  <Routes>
				  <Route path='/' element={<Login />} />
				  
			  		<Route path='/librairie' element={<Librairie />} />
			  		<Route path='/favorites' element={<Favorie />} />
			  		<Route path='/search' element={<Seach />} />
			  		<Route path='/feed' element={<Feed />} />
			  		<Route path='/player' element={<Player />} />
			  		<Route path='/trending' element={<Trending/>} />
			  	</Routes> 
			</div>
	  </Router>
  )
}

export default Home
