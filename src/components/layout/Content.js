import React from 'react';
//import Card from './Card';
import ContentMenu from './ContentMenu';
import ContentContainer from './ContentContainer';

import {Grid, Paper} from '@material-ui/core'


export default class Content extends React.Component {

    constructor(){
        super();
        console.log(this.props);
    }

    

    render()
    {
    return (
        <Grid container>
            <Grid item sm>
                <ContentMenu menu={this.props.menu}></ContentMenu>
            </Grid>
            <Grid item sm>
                <ContentContainer></ContentContainer>
            </Grid>
        </Grid>

        );
    }
}

