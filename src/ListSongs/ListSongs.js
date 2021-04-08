import React, { useContext } from 'react'
import "./ListSongs.css"
import Footer from '../Footer/Footer'
import { DataContext } from '../DataContext'

function ListSongs({ track }) {
    const [{ trackUri }, dispatch] = useContext(DataContext)

    const handleClick = (uri) => {
        dispatch({
            type: 'SET_TRACK_URI',
            trackUri: uri
        }) 
    }
    return (
        <div
            className="listSong"
            onClick={() => handleClick(track.uri)}
        >

            <img className="listSong__album" src={track.album.images[0].url} alt="" />
            <div className="listSong__info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default ListSongs
