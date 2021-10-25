import React from 'react';
import {Grid,Paper,styled,Divider}  from '@material-ui/core';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: 10,
    marginBottom: 10,
    // backgroundColor: 'red',
  }));

export default () =>
    <Grid container spacing={2}>
        <Grid item xs={2}>
            <Item elevation={3}>xs=8</Item>
        </Grid>
        <Grid item xs={10}>
            <Item >xs=4</Item>
        </Grid>
    </Grid>