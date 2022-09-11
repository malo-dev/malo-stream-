import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Songcard from '../../components/songCard/Songcard'
import Queue from '../../components/queue/Queue'
import AudioPlayer from '../../components/audioplayer/AudioPlayer'
import './player.css'
const Player = () => {
  
  const [tracks, setTracks] = useState([])
  const [currentTracks, setcurrentTracks] = useState({})
   const [currentIndex,setcurrentIndex]=useState(0)
  const location = useLocation()
 
  useEffect(() => {
    if (location.state) {
      const accessToken = localStorage.getItem('token');
      let Settings = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        }
      }
      fetch("https://api.spotify.com/v1/playlists/" + location.state?.id + "/tracks?market=ES&fields=items(added_by.id%2Ctrack(name%2Chref%2Calbum%2Cartist(name%2Chref)))&limit=6&offset=0", Settings).then((res) => {
        (res.json()).then(data => {
          setTracks(data.items)
          const arrayitems = data.items[0]
          setcurrentTracks(arrayitems.track)
        });
      })
    } }
    , [location.state]);
useEffect(() => {
    const arrayitem = tracks[currentIndex]
    const ArrayItem = { ...arrayitem }
  setcurrentTracks(ArrayItem?.track)
    
  },[currentIndex,tracks])
  
  return (
    <div className='screem-container flex'>
      <div className="left-body-player">
        <AudioPlayer currentTrack={currentTracks?.album?.images[0]?.url} currenName={currentTracks} />
      </div>
      <div className="right-body-player">
        <Songcard album={currentTracks?.album}/>
        <Queue tracks={ tracks} setcurrentIndex={setcurrentIndex} />
      </div>
    </div>
  )
}

export default Player