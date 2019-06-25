import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Content from './components/layout/Content';
import Logo from './components/layout/Logo';
import Navigation from './components/layout/Navigation';

//import logo from './logo.svg';
//import './App.css';

function App() {
  return (

    <div className="App">
      <Header></Header>
      <Logo></Logo>
      <Navigation></Navigation>

      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
