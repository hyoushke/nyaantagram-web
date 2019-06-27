import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Content from './components/layout/Content';
import Logo from './components/layout/Logo';
import Navigation from './components/layout/Navigation';

//import logo from './logo.svg';
//import './App.css';

function App() {

  let state = {
    menu: [
      {
        id: 1,
        key: 1,
        parent: 0,
        isparent: 1,
        name: 'Home',
        url: '/home',
        icon: 'home.ico',
        description: 'This is the home component'
      },
      {
        id: 2,
        key: 2,
        parent: 0,
        isparent: 1,
        name: 'Dashboard',
        url: '/home',
        icon: 'home.ico',
        description: 'This is the home component'
      },
      {
        id: 3,
        key: 3,
        parent: 0,
        isparent: 1,
        name: 'Contact',
        url: '/home',
        icon: 'home.ico',
        description: 'This is the home component'
      }



    ]
  }

  let menu = state.menu;

  return (

    <div className="App">
      <Header></Header>
      <Logo></Logo>
      <Navigation></Navigation>

      <Content menu={menu}></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
