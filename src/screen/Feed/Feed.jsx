import React from 'react'
import './Search.css'
import { useState } from 'react'
import { useEffect } from 'react'
const Feed = () => {
  const [img, setImg] = useState([])
  
  const [artiste, setArtist] = useState("yeshua")
  const searchFunc = () => {
      const accessToken = localStorage.getItem('token')
      let Settings = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        }
  
      }
      fetch(`https://api.spotify.com/v1/search?q=${artiste}&type=artist&limit=10&offset=0` + '&type=artist', Settings).then(res => res.json())
        .then(data => {

          const imagesItem = data.artists.items.map(value => {
            return value.images
          })
          const arrayItems = imagesItem.map(imageValue => {
            return [...imageValue][1]
          })
          const array = arrayItems.map(image => {
          
            return { ...image }
          })
          const malo = array.map(value => {
            
            return <img className='image-artiste' src={value.url} alt="artiste image"  />
          })
          return setImg(malo)
        })
  }    
   
    useEffect(() => {
        searchFunc()
    }, [])
  return (
    <div className='screem-container'>
      <input type="text" className='searcher' name="search" placeholder='search artist...' onKeyDown={(e) => {
        setArtist(e.target.value)
        searchFunc()
      }} />
     
      <div className='images-container'>
        {img}
      </div>
    </div>
  )
}

export default Feed