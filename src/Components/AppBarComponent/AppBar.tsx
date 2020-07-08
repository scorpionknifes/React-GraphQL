import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import SearchBar from '../SearchBarComponent/SearchBar'
import GitHubIcon from '@material-ui/icons/GitHub';
import './AppBar.css'

const Bar = () => {
    return <AppBar position="static">
        <Toolbar>
            <Typography variant="h5" >
                GraphQL Jobs
            </Typography>
            <SearchBar/>
            <IconButton  href="https://github.com/scorpionknifes/React-GraphQL" edge="start" color="inherit" aria-label="menu">
                <GitHubIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
}

export default Bar