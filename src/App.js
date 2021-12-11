// import logo from './logo.svg';
import React from "react";
import './App.css';
import Gallery from "./components/Gallery";
import layoutGal from "./components/layoutGal";
 

export default class App extends React.Component {
  render() {
      return (
      <div className="App">
        {/* site header */}
        <h2>My Photography Gallery</h2>
        <Gallery />
        {/* <layoutGal /> */}
      </div>
    );
  }
}