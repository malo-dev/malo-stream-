import React from 'react'
import './Lbrairy.css'
import { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { AiFillPlayCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Librairie = () => {
  const [playlists, setPlaylist] = useState(null)
 
  useEffect(()=>{
      const accessToken = localStorage.getItem('token')
      let Settings = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        }
      }
    
      fetch(`https://api.spotify.com/v1/users/smedjan/playlists?offset=0&limit=30`, Settings).then(res => res.json())
        .then(data => {
          console.log(data)
          const imagesItem = data.items.map(value => {
            return value
          })
       return setPlaylist(imagesItem)
          
        })    
  }, [])
  const navigate = useNavigate()
  const playPlaylist = (id) => {
    navigate('/player', {state : {id:id}})
  }
  return (
    <div className='screem-container'>
      
      <div className='librairy-body'>
         
      {playlists ?.map((playlist) => 
        <div key={playlist.id} className='playlist-card' onClick={() => {
          playPlaylist(playlist.id)
        }}>
          <img src={{...playlist.images[0]}.url } alt="no images is loading" className='playlist-images img' />
          <p className='playlist-title'>{playlist.name}</p>
          <p className='playlist-subtitle'>{playlist.tracks.total} songs</p>

            <div className="playlist-fade">
            <IconContext.Provider value={{ size: "50px" ,color : "white" }}>
                <AiFillPlayCircle/>
            </IconContext.Provider> 
          </div>
           
        </div>
      )} 
       
    </div> 
    </div>
  )
}

export default Librairie