import React from 'react';
//import Card from './Card';

import {Grid, Paper} from '@material-ui/core'

import ContentTypePost from './ContentTypePost';
import ContentTypeImage from './ContentTypeImage';
import ContentTypeVideo from './ContentTypeVideo';
import ContentTypeListing from './ContentTypeListing';
import ContentTypeGallery from './ContentTypeGallery';
import ContentTypeMusic from './ContentTypeMusic';
import ContentTypeReport from './ContentTypeReport';
import ContentTypeGrid from './ContentTypeGrid';
import ContentTypeMessage from './ContentTypeMessage';

//this is ContentContainre version 1
//this is not yet component splitting ready

//the idea here is 
//#1. determine the content type

function ContentContainer(contentType) {

  const contentTypes = ['contentVideo', 'contentPost', 'contentPlayer', 'contentGrid', 'contentMusicPlayer'];

  const getContentType = (contentType, contentData)=> {

    const content = null;
    switch(contentType)
    {
      case 'contentImage':
        content = <ContentTypeImage content={contentData}></ContentTypeImage>
        break;
      case 'contentVideo':
        content = <ContentTypeVideo content={contentData}></ContentTypeVideo>
        break;
      case 'contentPost':
        content = <ContentTypePost content={contentData}></ContentTypePost>
        break;
      case 'contentMusic':
        content = <ContentTypeMusic content={contentData}></ContentTypeMusic>
        break;
      case 'contentGrid':
        content = <ContentTypeGrid content={contentData}></ContentTypeGrid>
        break;
      case 'contentListing':
        content = <ContentTypeListing content={contentData}></ContentTypeListing>
        break;
      case 'contentGallery':
        //content = <ContentTypeGallery content={contentData}></ContentTypeGallery>
        break;
      case 'contentMessage':
        content = <ContentTypeMessage content={contentData}></ContentTypeMessage>
        break;
    }

    return content;

  }


  return (

    <Grid container>
      {getContentType(contentType)}
    </Grid>

    )
}

export default ContentContainer;
