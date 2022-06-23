import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

const CommitItem = ({ commit, committer }) => (
    <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar alt={commit.author.name} src={committer && committer.avatar_url} />
        </ListItemAvatar>
        <ListItemText
            primary={commit.message}
            secondary={
                <>
                    <span>{commit.author.name}</span>
                    <br/>
                    <span>{commit.author.date}</span>
                </>
            }
        />
    </ListItem>
);

export default CommitItem;
