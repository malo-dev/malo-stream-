import React from 'react'
import './Queue.css'
const Queue = ({ tracks, setcurrentIndex }) => {
	
	const paragraphe = tracks.map((element,index) => {
		return (
			<div className='items-list-name flex' onClick={()=>{setcurrentIndex(index)}}>
				<p className='trackName'>{ element?.track?.name}</p> 
				 <p>00 : 30</p>
			</div>
		)
	})
	
	
  return (
	<div className='queue-container flex'>
		  <div className='queue flex'>
			  <p className='upNext'>UpNext</p>
			  <div className='list-musique'>
					{paragraphe}
			  </div>
		  </div>
	</div>
  )
}

export default Queue
