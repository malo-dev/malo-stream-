import React from 'react'
const authEndpoint = "https://account.spotify.com/authorize?"
const clientID = " 6662ade64fab4fb098674e489d97a6cb";
const redirectUrl = "http://localhost:5174/"
const scopes = ["user-library-read", "playlist-read-private"]
const loginEndpoint = `${authEndpoint}client_id=${clientID}`

const spotify = () => {
  return (
	<div>spotify</div>
  )
}

export default spotify