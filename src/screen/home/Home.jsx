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

import { useState, useEffect } from 'react'
import { getTokenFromResponse } from '../../components/spotifyConnect/spotify'
import { seturl } from '../../components/spotifyConnect/spotify'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Home = () => {
	
	const [token, setToken] = useState("")
	useEffect(() => {
		const hash = window.location.hash
		const token = localStorage.getItem("token")
		location.hash = "";
		if (!token && hash) {
			const _token = hash.split("&")[0].split("#")[1]
			localStorage.setItem("token", _token)
			console.log(token);
			setToken(_token);
			seturl(_token);
		} else {
			setToken(token)
			seturl(token)
		}
		
		// const token = localStorage.getItem('token');
		// const hash = getTokenFromResponse();
		// location.hash = "";
		// setToken(token)
		// const _token = hash.access_token
		 	
		// console.log(_token);
		// localStorage.setItem('token', _token)
		// if (!token && hash) {
		// 	const _token = hash.access_token
		// 	console.log(_token);
		// 	localStorage.setItem('token', _token)
		// 	setToken(_token)
		// 	seturl(_token)
		// } else {
			
		// 	setToken(token)
		// 	seturl(token)
		// }

		// console.log(hash.split("&")[0].split("#")[1])
	}, [])
	
	
  return  (token ?(<Login/>) :
	  <Router>
		<div className='main-body'>
			   <Sidebar/>
			  <Routes>
			  		<Route exact path='/' element={<Librairie />} />
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
