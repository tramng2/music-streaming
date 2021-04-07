import React, { useContext } from 'react'
import "./Sidebar.css"
import SidebarNav from "./SiderbarNav"
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {DataContext} from "../DataContext"
// import { useDataContextValue } from '../DataContext'

function Sidebar() {
    // const [{ playlists }, dispatch] = useDataContextValue()

    const [{ playlists }, dispatch] = useContext(DataContext)
    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="" />
            <SidebarNav title="Home" Icon={HomeOutlinedIcon} />
            <SidebarNav title="Search" Icon={SearchOutlinedIcon} />
            <br />
            <strong className="sidebar__title">PLAYLIST</strong>
            <hr />

            {playlists?.items?.map(playlist => (<SidebarNav title={playlist.name} />))}


        </div>
    )
}

export default Sidebar
