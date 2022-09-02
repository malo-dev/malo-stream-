import React from 'react'
import alogo from '../../assets/google.png'
import { SignInWithGoogle } from '../firebase/Firebase'



const Login = () => {
	
	
	return (
	
	 <div className='login'>
			<h1 className='malo-title'>Malo<span className='stream-span'>stream</span></h1>
			<div className="inputLoginGoogleButton">
				<img src={alogo} alt="logo" />
				<button onClick={SignInWithGoogle}>Login with Google</button>
				
				<h1 className='malo-title'>Welcome to Malo<span className='stream-span'>stream</span></h1>
				<p>We are so excited you've decided to join our company! This morning, you'll meet with our onboarding director who will discuss our employee handbook and review some paperwork for you to sign. Later in the afternoon, you'll meet with me where we can discuss your initial tasks and training schedule. I'll review important information then and leave time for you to ask any questions you might have. We know you're a great fit for our team, and we look forward to working with you! and Thank you for joining us! With your skills and experience, I know you're a great fit for our team! Please review the email I sent this morning for your first-day tasks, and I'll see you at our meeting this afternoon!</p>
			</div>
		</div> 
	
	)
}

export default Login
