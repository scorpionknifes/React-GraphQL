import React from 'react';

import {Card, CardContent, CardHeader, Avatar, Typography} from '@material-ui/core';
import './MediaCard.css';
import { Job } from '../../Common/Types';

type MediaCardProps = {
    Job: Job
}

function MediaCard(props: MediaCardProps) {
    return (
        <div>
            <Card className="MediaCardContainer">
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className="MediaCardAvatar">R</Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default MediaCard