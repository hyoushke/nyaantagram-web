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

function ContentMenu(menu) {
  let data = menu.menu.menu;
  //console.log(data);

  data.map( (d) => {
    console.log(d.name);

}  );

const listItems = data.map((d) =>
<span><br />{d.name}</span>
);


return (

        
    <Grid container>
      {listItems}
    </Grid>

    )
}

export default ContentMenu;
