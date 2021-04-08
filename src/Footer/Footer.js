import React, { useContext, useEffect, useState } from 'react'
import "./Footer.css"
import SpotifyPlayer from 'react-spotify-web-playback'
import { DataContext } from "../DataContext"

function Footer({ token }) {
    const [{ trackUri }, dispatch] = useContext(DataContext)
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => setIsPlaying(true), [trackUri])

    console.log("trackUri", trackUri)
    return (
        <div className="footer">
            <SpotifyPlayer
                className="footer__spotify-player"
                token={token}
                play={isPlaying}
                showSaveIcon
                uris={trackUri ? [trackUri] : []}
                callback={state => {
                    if (!state.isPlaying) setIsPlaying(false)
                }}
                styles={{
                    color: "#ffffff",
                    trackNameColor:"white",
                    bgColor:'#000',
                    sliderTrackColor:"grey"
                }}
            />
        </div>
    )
}

export default Footer
