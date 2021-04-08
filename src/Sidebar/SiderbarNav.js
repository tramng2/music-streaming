import React, {useContext, useEffect} from 'react'
import "./SidebarNav.css"
import {DataContext} from "../DataContext"

function SiderbarNav({ title, Icon, link }) {
    const [{ playlistId }, dispatch] = useContext(DataContext)

    useEffect(() => {
        dispatch({
            type: "SET_PLAYLIST_ITEM",
            playlistId: link
        })
    },[link, dispatch])

    const printPlayListId = (link) => {
        dispatch({
            type: "SET_PLAYLIST_ITEM",
            playlistId: link
        })
    }
    
    return (
        <div className="sidebarNav">
            {Icon && <Icon className="sidebar__icon"/>}
            {Icon ? <h4>{title}</h4> : <button className="sidebar__playlist" onClick={()=> printPlayListId(link)}> {title} </button>}
        </div>
    )
}

export default SiderbarNav
