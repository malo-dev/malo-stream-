import React from 'react'
import './AlbumImage.css'
const AlbumImage = (url) => {
 
  return (
  
    <div className='albumimage flex'>
        <img src={url.url} alt="album artist" className='albumimage-art' />
      <div className="shadowimage">
        <img src={url.url} alt="shadow" className='shadowimage' />
      </div>
    </div>


  )
}

export default AlbumImage