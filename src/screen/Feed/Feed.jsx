import React from 'react'
import './Search.css'
import { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { AiFillPlayCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


const Feed = () => {

  const [plist,setPlaylists]=useState("benjamin")
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
    
      fetch(`https://api.spotify.com/v1/users/${plist}/playlists?offset=0&limit=20`, Settings).then(res => res.json())
        .then(data => {
          
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
           <input type="text" className='searcher' name="search" placeholder='search artist...' onKeyDown={(e) => {
        setPlaylists(e.target.value)
        
      }} />
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

export default Feed