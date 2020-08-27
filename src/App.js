import React, {Component} from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import TourList from './components/TourList/TourList'

export default class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Navbar/>
        <TourList/>
        <Footer/>
      </React.Fragment>
    );
  }
}

