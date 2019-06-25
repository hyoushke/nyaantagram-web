import React from 'react';
//import Card from './Card';

import {Grid, Paper} from '@material-ui/core'
import {ContentVideo} from './ContentVideo';

//this is ContentContainre version 1
//this is not yet component splitting ready

//the idea here is 
//#1. determine the content type

function ContentContainer() {

  const contentTypes = ['contentVideo', 'contentPost', 'contentPlayer', 'contentGrid', 'contentMusicPlayer'];

  const getContentType = (contentType)=> {

    switch(contentType)
    {
      case 'contentVideo':
        return <ContentVideo content={content}></ContentVideo>
        break;
      case 'contentPost':
        return <ContentVideo content={content}></ContentVideo>
        break;
      case 'contentPlayer':
        return <ContentVideo content={content}></ContentVideo>
        break;
      case 'contentGrid':
        return <ContentVideo content={content}></ContentVideo>
        break;
      case 'contentMusicPlayer':
        return <ContentVideo content={content}></ContentVideo>
        break;

    }

  }


  return (

    <Grid container>

    </Grid>

    )
}

export default ContentContainer;
