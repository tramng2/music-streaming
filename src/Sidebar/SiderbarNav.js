import React from 'react'
import "./SidebarNav.css"

function SiderbarNav({ title, Icon }) {
    return (
        <div className="sidebarNav">
            {Icon && <Icon className="sidebar__icon"/>}
            {Icon ? <h4>{title}</h4> : <p className="sidebar__playlist">{title}</p>}

        </div>
    )
}

export default SiderbarNav
