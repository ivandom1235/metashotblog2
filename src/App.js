import React from 'react';
import Logo from './components/Logo';
import './styles.scss';
import Searchhome from './components/Searchhome';
import Sidebar from './components/Sidebar';
import Blogpage from './components/Blogpage';
import Footing from './components/Footing';
import Searchpage from './components/Searchpage';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogpagetwo from './components/Blogpagetwo';
import Searchpage2 from './components/Searchpage2';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='main'>
          <div className='left'>
            <Logo />
            <Searchhome />
            <Sidebar />
          </div>
          
          <div className='right'>
            <Routes>
              <Route path="/" element={<Blogpage />} />
              <Route path="/search" element={<Searchpage />} />
              <Route path="/" element={<Blogpagetwo />} />
              <Route path="/search" element={<Searchpage2 />} />
            </Routes>
          </div>
        </div>
        
        <Routes>
          <Route path="/" element={<div className='centre'><Blogpagetwo /></div>} />
          <Route path="/search" element={<div className='centre'><Searchpage2 /></div>} />
        </Routes>
       
      </BrowserRouter>
      <Footing />
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
