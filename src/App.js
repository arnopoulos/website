import React from 'react';
import logo from './avatar.jpg';
import './App.css';

function App() {
  return (
    <header className="App-header">
      <img src={logo} className="Avatar" alt="logo"/>
      <sub className="Subtitle">Just a developer who needed a website for reasons.</sub>
    </header>
);
}

export default App;
