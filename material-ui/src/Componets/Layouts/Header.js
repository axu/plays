import * as React from 'react';
import {AppBar,Box,Toolbar,Typography,Button,IconButton}  from '@material-ui/core';
import {Menu} from '@material-ui/icons';

export default () =>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
    <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
        >
        <Menu />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
        </Typography>
        <Button color="inherit">Login</Button>
    </Toolbar>
    </AppBar>
    </Box>