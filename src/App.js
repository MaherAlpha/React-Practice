import React from 'react';
import Button from './component/Button/Button.jsx';
import '../src/App.css'
import Header from './component/Header/Header.jsx';
import SideNav from './component/SideNav/SideNav.jsx';

function App() {
  const title="Create" 
  return (
    <div className='container'>
      <Header title="Users Catalog" subtitle="keeping the shine"/>
      <SideNav />
      <div>
    
      </div>
      

    </div>
  );
}

export default App;
