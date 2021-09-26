import React from 'react';
import './App.css'
import Books from './Componenet/Books/Books';
import Header from './Componenet/Header/Header';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Books></Books>
    </div>
  );
};

export default App;