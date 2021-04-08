import React, { useContext} from 'react'
import "./Player.css"
import Sidebar from "../Sidebar/Sidebar"
import Body from "../Body/Body"
import Footer from "../Footer/Footer"
import { DataContext } from "../DataContext"

function Player({ spotify }) {
    const [{ token }, dispatch] = useContext(DataContext)
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body spotify={spotify}/>
                
            </div>
                <Footer token={token} />
        </div>
    )
}

export default Player
