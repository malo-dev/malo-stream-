import React from 'react'
import './audioplayer.css'
import ProgressBarCircle from '../audioplayercomponnent/progressBarcircle'
import Controls from '../audioplayercomponnent/Controls/Controls'
import WaveAnimation from '../audioplayercomponnent/waveAnimation/WaveAnimation'
const AudioPlayer = (currentTrack,isPlaying) => {
	const array = currentTrack?.currenName?.album
	const valueItem = { ...array }
	const artists = [];
	valueItem?.artists?.forEach(element => {
		return artists.push(element.name )
	});
	console.log(currentTrack?.currenName?.album?.artists)
	
  return (
	  <div className='player-body flex'>
		  <div className='player-left-body'>
			  <ProgressBarCircle
				  percentage={75}
				  isPlaying={true}
			      image = {currentTrack?.currentTrack}
				  size={300}
				  color="rgba(206, 75, 195, 0.849)"
			  /> 
		  </div> 
		  <div className="player-right-body flex">
			  <p className="song-title">{currentTrack?.currenName?.name}</p>
			  <p className="song-title">{artists?.join('/')}</p>
			  
			          <div className="player-right-bottom flex">
          <div className="song-duration flex">
            <p className="duration">0:01</p>
            <WaveAnimation />
            <p className="duration">0:30</p>
          </div>
          <Controls
            // isPlaying={isPlaying}
            // setIsPlaying={setIsPlaying}
            // handleNext={handleNext}
            // handlePrev={handlePrev}
            // total={total}
          />
        </div>
            
		  </div>
	  </div>
  )
}

export default AudioPlayer