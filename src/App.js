import React from 'react';
import Button from './component/Button/Button.jsx';
import '../src/App.css'

function App() {
  const title="Create" 
  return (
    <div className='container'>

      <Button  button={title}/>

    </div>
  );
}

export default App;
