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

  constructor(props){
      super(props);
      //this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (name) =>{
    alert(name);
    console.log(name);
  }

  render()
  {
    console.log(this.props);


    const listItems = this.props.menu.map((d) =>

    //<span style={{display: block; clear: both; position: relative; font-weight: bold;}}>
    <li key={d.id}>
    <button key={d.key} name={d} onClick={ (e) => this.handleClick(d.name)  }>{d.name}</button>
    </li>
    //</span>
  );


  return (<Grid container><ul>{listItems}</ul></Grid>);
  }


}


