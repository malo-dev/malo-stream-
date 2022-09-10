import React from 'react'
import './Songcard.css'
import AlbumImage from './AlbumImage'
import AlbumInfo from './AlbumInfo'
const Songcard = ({album}) => {
  return (
    <div className='Songcard flex'>
      <AlbumImage url={album?.images[0]?.url} />
      
      <AlbumInfo album={album} />
    </div>
  )
}

export default Songcard