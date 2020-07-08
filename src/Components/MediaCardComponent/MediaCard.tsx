import React from 'react';

import { Card, Grid, CardContent, Chip, Avatar, Button } from '@material-ui/core';
import './MediaCard.css';
import { Job } from '../../Common/Types';

type MediaCardProps = {
    Job: Job
}

const MediaCard = (props: MediaCardProps) => {
    const { Job } = props;
    return (
        <Card className="MediaCardContainer">
            <Grid className="MediaCardAvatarBox" container direction="row" justify="center" alignItems="center">
                <div className="MediaCardAvatarInner">
                    <Grid>
                        {
                            !Job.company.logoUrl || Job.company.logoUrl === "" ?
                                <Avatar aria-label="recipe" className="MediaCardAvatar">{Job.company.name.charAt(0)}</Avatar> :
                                <Avatar alt="Remy Sharp" className="MediaCardAvatar" src={Job.company.logoUrl} />
                        }

                    </Grid>
                    <Grid container direction="column" justify="center" alignItems="flex-start">
                        <>
                            <span><b>{Job.title}</b> </span>
                            <span>at {Job.company.name} </span>
                        </>
                    </Grid>
                </div>
                <CardContent>
                    <div className="MediaCardTags">
                        {
                            Job.tags?.map(({ name }, i) => {
                                return <Chip key={i} className="MediaCardTag" variant="outlined" color="primary" label={name} />
                            })
                        }
                    </div>
                    <div className="MediaCardTags">
                        <Chip className="MediaCardTag" variant="outlined"  label={Job.commitment.title} />
                        {
                            Job.countries?.map(({ name }, i) => {
                                return <Chip key={i} className="MediaCardTag" variant="outlined" color="primary" label={name} />
                            })
                        }
                        {
                            Job.cities?.map(({ name }, i) => {
                                return <Chip key={i} className="MediaCardTag" variant="outlined" color="secondary" label={name} />
                            })
                        }

                    </div>
                </CardContent>
                <div className="MediaCardApplyButton">
                <Button variant="contained" size="large" color="primary" href={Job.applyUrl} >Apply</Button>
                </div>
            </Grid>
        </Card>
    )
}

export default MediaCard