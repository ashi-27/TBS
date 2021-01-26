
import './App.css';
import ExportExcel from './components/ExportExcel';
import React, { Component } from "react";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
       
       <ExportExcel/>
        </div>
    );
  }
}

export default App;
