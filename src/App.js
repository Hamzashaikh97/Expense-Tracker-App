import React from 'react'
import Child from './child'
import './App.css';
import { TransectionProvider } from './transcontext';


function App() {
  return (
    <TransectionProvider >
      <Child />
    </TransectionProvider>
  );
}

export default App;
