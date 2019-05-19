import React from 'react';
import '../App.css';
import Header from '../Components/Header'
import StoreLocator from './StoreLocator'

function App() {
  return (
    <div className="App">
      <Header/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <StoreLocator/>
    </div>
  );
}

export default App;
