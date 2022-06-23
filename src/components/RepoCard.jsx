import React from 'react';
import { Badge, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { grey, yellow } from '@mui/material/colors';

import CommitList from './CommitList';

const RepoCard = ({ selectedRepo, setSelectedRepo, name, description, stars, accountDetails }) => {    
    const handleRepoClick = name => {
        setSelectedRepo(name);
    }

    return (
        <>
            <Card key={name} sx={{ margin: "15px" }} onClick={() => { handleRepoClick(name) }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <br/>
                        <Badge badgeContent={stars} sx={{ color: grey[500] }}>
                            <StarIcon sx={{ color: yellow[500] }} fontSize="medium"/>
                        </Badge>
                    </CardContent>
                </CardActionArea>
            </Card>

            {selectedRepo === name && <CommitList owner={accountDetails.login} repo={name} />}
        </>
    )
};

export default RepoCard;
