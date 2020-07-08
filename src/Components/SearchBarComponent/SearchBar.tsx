import React, { useState, useEffect, useContext } from 'react'
import { Grid, TextField, Button } from '@material-ui/core'
import SearchQuery from '../../GraphQL/SearchQuery'
import { useQuery } from '@apollo/react-hooks'
import { LocationsInput } from '../../Common/Types'
import './SearchBar.css';
import { JobsContext } from '../../Contexts/JobsContext'

const SearchBar = () => {
    const [HasFocus, setHasFocus] = useState<boolean>(false);
    const [search, setSearch] = useState("")
    const { setJobs, handleSearch } = useContext(JobsContext)
    
    const handleSubmit = () =>{
        handleSearch(search)
    }

    return <div className="SearchBarContainer">
        <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
                <TextField
                    required
                    id="outlined-required"
                    label="Location"
                    variant="outlined"
                    error={HasFocus && search === ""}
                    onClick={() => setHasFocus(true)}
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </Grid>
            <Grid item xs={6} sm={3}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
            </Grid>
        </Grid>
    </div>
}

export default SearchBar