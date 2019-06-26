import React from 'react';
//import Card from './Card';

import {Grid, Paper} from '@material-ui/core'

/*
function loopData(data){
  data.map( (d) => {
    console.log(d.name);

}  );
      
}
*/

export default class ContentMenu extends React.Component {

  constructor(){
    super();
    console.log(this.props);
  }




render()
{
  const listItems = this.props.menu.map((d) =>

  //<span style={{display: block; clear: both; position: relative; font-weight: bold;}}>
  <li>
  <a href="#">{d.name}</a>
  </li>
  //</span>
);


return (
<Grid container>
      <ul>
        {listItems}
      </ul>
    </Grid>
    );
}


}


