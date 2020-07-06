import React, { useContext } from 'react';
import MediaCard from '../MediaCardComponent/MediaCard';
import { Grid } from '@material-ui/core';
import './MediaGrid.css';
import { Job } from '../../Common/Types';
import { JobsContext } from '../../Contexts/JobsContext';


const MediaGrid = () => {
    const { jobs } = useContext(JobsContext)

    var Cards: JSX.Element[] = [];
    jobs.forEach((job: Job, i: Number) => {
        if (!job) {
            return;
        }
        Cards.push(
            <Grid key={"card_" + i} item sm={6} md={4} lg={3} className="MediaGridCard">
                <MediaCard Job={job} />
            </Grid>)
    })

    return (
        <div>
            <Grid container spacing={3} className="MediaGridContainer">
                {Cards}
            </Grid>
        </div>
    )
}
export default MediaGrid