import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const TopBar = () => (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
            GitHub Search
            </Typography>
        </Toolbar>
        </AppBar>
    </Box>
);

export default TopBar;
