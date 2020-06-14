import React from 'react';
import './App.css';
import NChart from './components/NChart'
import TopValue from "./components/TopValue"
import List from './components/List'
import Foot from './components/Foot'

function App() {
  
  return (
    <div className="App">
      <NChart/>
      <TopValue/>
      <List/>
      <Foot/>
    </div>
  );
}

export default App;
