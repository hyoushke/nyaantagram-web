import React from 'react';
//import Card from './Card';

import {Grid, Paper} from '@material-ui/core'
import {ContentVideo} from './ContentVideo';
import {ContentMusic} from './ContentMusic';
import {ContentReport} from './ContentReport';
import {ContentGrid} from './ContentGrid';
import {ContentMessage} from './ContentMessage';

//this is ContentContainre version 1
//this is not yet component splitting ready

//the idea here is 
//#1. determine the content type

function ContentContainer() {

  const contentTypes = ['contentVideo', 'contentPost', 'contentPlayer', 'contentGrid', 'contentMusicPlayer'];

  const getContentType = (contentType, contentData)=> {

    switch(contentType)
    {
      case 'contentVideo':
        return <ContentVideo content={contentData}></ContentVideo>
        break;
      case 'contentPost':
        return <ContentPost content={contentData}></ContentPost>
        break;
      case 'contentMusic':
        return <ContentMusic content={contentData}></ContentMusic>
        break;
      case 'contentGrid':
        return <ContentGrid content={contentData}></ContentGrid>
        break;
      case 'contentMusicPlayer':
        return <ContentMusic content={content}></ContentMusic>
        break;

    }

  }


  return (

    <Grid container>

    </Grid>

    )
}

export default ContentContainer;
