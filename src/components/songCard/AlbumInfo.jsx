import React from 'react'
import './albumInfo.css'
const AlbumInfo = ({ album }) => {
  let malo = album
  malo={...malo}
  const artists = [];
  malo?.artists?.forEach(element => {
    artists.push(element.name)
  })
 
 
  return (
    <div className='albumcard-info '>
      
      <div className='albuminfo-container'>
        <div className='marque'>
          <p>{malo?.name + "-" + artists?.join(',')}</p>
        </div>
      </div>
      
      <div className='album-info'>
        
        <p>{`${malo?.name} is an ${malo?.album_type} by ${artists?.join(
          ","
        )} with ${malo?.total_tracks} track(s)`}
        </p>
        
      </div>
      
      <div className="album-release">
        <p>{`Release date : ${ malo?.release_date}` }</p>
      </div>
      
     </div>
  )
}

export default AlbumInfo