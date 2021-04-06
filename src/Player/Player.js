import React from 'react'
import "./Player.css"
import Sidebar from "../Sidebar/Sidebar"
import Body from "../Body/Body"
import Footer from "../Footer/Footer"

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
                {/* side bar and main */}
                <Sidebar />
                <Body />
                
            </div>
                {/*footer*/}
                <Footer />
        </div>
    )
}

export default Player
