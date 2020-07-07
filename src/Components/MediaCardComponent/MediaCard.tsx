import React from 'react';

import { Card, Grid, CardContent, CardHeader, Avatar, Typography } from '@material-ui/core';
import './MediaCard.css';
import { Job } from '../../Common/Types';

type MediaCardProps = {
    Job: Job
}

function MediaCard(props: MediaCardProps) {
    const { Job } = props;
    return (
        <Card className="MediaCardContainer">
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid xs={3}>
                    {
                        !Job.company.logoUrl || Job.company.logoUrl === "" ?
                            <Avatar aria-label="recipe" className="MediaCardAvatar">{Job.company.name.charAt(0)}</Avatar> :
                            <Avatar alt="Remy Sharp" src={Job.company.logoUrl} />
                    }

                </Grid>
                <Grid xs={9} container direction="column" justify="center" alignItems="flex-start">
                    <>
                        <span><b>{Job.title}</b> </span>
                        <span>at {Job.company.name} </span>
                    </>
                </Grid>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {Job.description}
                    </Typography>
                </CardContent>
            </Grid>

        </Card>
    )
}

export default MediaCard