// import logo from './logo.svg';
import React from "react";
import './App.css';
import Gallery from "./components/Gallery";
 

export default class App extends React.Component {
  render() {
      return (
      <div className="App">
        <h2>My Photography Gallery</h2>
        <Gallery />
      </div>
    );
  }
}