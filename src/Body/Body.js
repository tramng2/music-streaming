import React, { useContext } from 'react'
import "./Body.css"
import Header from "../Header/Header"
import Skeleton from '@material-ui/lab/Skeleton';

import { DataContext } from "../DataContext"


function Body({ spotify }) {
    const [{ playlistInfo }, dispatch] = useContext(DataContext)
    console.log("playlistInfo", playlistInfo)

    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="playlist__info">
                {playlistInfo ? <img
                    className="playlist__img"
                    alt="playlist img"
                    src={playlistInfo?.images[1].url}
                /> : <Skeleton variant="rect" width={220} height={300} />
                }

                <div className="playlist__content">
                    <strong>PLAYLIST</strong>
                    <h2>{playlistInfo?.name}</h2>
                    <div className="playlist__des">
                        <p className="playlist__des-owner">{playlistInfo?.owner.display_name}</p>
                        <p className="playlist__des-songs">•{playlistInfo?.tracks.total} songs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
