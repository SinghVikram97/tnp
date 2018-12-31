import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import CoverPhoto from './components/CoverPhoto/CoverPhoto'
import MainContent from './components/MainContent/MainContent'
import Recruiters from './components/Recruiters/Recruiters'
import Footer from './components/Footer/Footer'
import './App.css';
import '../node_modules/tachyons/css/tachyons.css'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <CoverPhoto/>
        <MainContent/>
        <Recruiters/>
        <Footer/>
      </div>
    );
  }
}

export default App;
