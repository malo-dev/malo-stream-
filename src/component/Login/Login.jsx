import React from 'react'
import alogo from '../../assets/alogo.png'
import { SignInWithGoogle } from '../firebase/Firebase'



const Login = () => {
	
	
	return (
	
	 <div className='login' style={{display:"none"}}>
			<h1 className='malo-title'>Malo<span className='stream-span'>stream</span></h1>
			<div className="inputLoginGoogleButton">
				<img src={alogo} alt="logo" />
				<button onClick={SignInWithGoogle}>Login with Google</button>
				
				<h3>Welcome to MaloStream</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, repellendus, minus maiores aliquam nostrum facere incidunt nihil sed sapiente nulla fugit? Amet nemo ea numquam pariatur quisquam minima at, ipsa beatae cum voluptatibus inventore illum ex excepturi officiis dolorum totam.</p>
			</div>
		</div> 
	
	)
}

export default Login
