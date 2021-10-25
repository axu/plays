import React from 'react';
import {Tabs,Tab}  from '@material-ui/core';

export default () =>
    <Tabs
        value={0}
        aria-label="basic tabs example"
        variant="fullWidth"
        indicatorColor="primary"
        textColor="inherit"
    >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
    </Tabs>