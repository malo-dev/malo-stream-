import React from 'react'
import { useEffect,useState } from 'react'

const Favorie = () => {
  const [album, setAlbum] = useState("7MP4jhYmFEgb0AtiOkw55s")
  const [artist,setartist]=useState("dadju")
  
    const searchFunction = () => {
        const accessToken = localStorage.getItem('token')
      let Settings = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        }
      }
    
      fetch(`https://api.spotify.com/v1/search?q=${artist}&type=track%2Calbum&market=ES&limit=30&offset=0`, Settings).then(res => res.json())
        .then(data => {
          
          console.log(data)
          
        })
    }
  useEffect(()=>{
      searchFunction()
  }, [])
  
  return (
    <div className='screem-container'>
    <input type="text" className='searcher' name="search" placeholder='search album...' onKeyDown={(e) => {
         console.log(e.target.value);
          setartist(e.target.value)
          searchFunction()
        
      }} />
      <iframe 
        style={{paddingTop : "10px" , borderRadius : "30px"}}
        src={`https://open.spotify.com/embed/artist/${album}?utm_source=generator`}
        width="97%"
        height="90%"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy">
      </iframe>
    
    </div>
  )
}

export default Favorie