import React, { useContext } from 'react'
import "./Footer.css"
import SpotifyPlayer from 'react-spotify-web-playback'
import { DataContext } from "../DataContext"

function Footer({ token }) {
    const [{trackUri}, dispatch] = useContext(DataContext)
    // console.log("token", token)
    console.log("trackUri", trackUri)
    return (
        <div className="footer">
            <SpotifyPlayer 
            token={token}
            showSaveIcon
            uris={trackUri}
            />
        </div>
    )
}

export default Footer
