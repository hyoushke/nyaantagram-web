import React from 'react';
import Card from './Card';
import ContentMenu from './ContentMenu';
import ContentContainer from './ContentContainer';

import {Grid, Paper} from '@material-ui/core'


function Content() {
  return (

    <Grid container>
        <Grid item sm>
            <ContentMenu></ContentMenu>
        </Grid>
        <Grid item sm>
            <ContentContainer></ContentContainer>
        </Grid>
    </Grid>

    )
}

export default Content;
