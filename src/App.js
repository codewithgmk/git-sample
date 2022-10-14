import { React, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';

function App() {
  return (
    <>
      <h1>App Component</h1>
      <Routes>
        <Route path='/comp1' element={<Component1 />} />
        <Route path='/comp2' element={<Component2 />} />
      </Routes>
    </>
  );
}

export default App;
