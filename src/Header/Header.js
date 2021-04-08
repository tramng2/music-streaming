import React, { useContext } from 'react'
import "./Header.css"
import { DataContext } from "../DataContext"
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
}));

function Header({ spotify }) {
    const [{ user }, dispatch] = useContext(DataContext)
    const classes = useStyles();



    return (
        <div className="header">
                <div className="header__user">
                    <Avatar alt={user?.display_name} src={user?.images[0].url} className={classes.small} />
                    <h4 className="header__name">{user?.display_name}</h4>
                </div>  
        </div>
    )
}

export default Header
