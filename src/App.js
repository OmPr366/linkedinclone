import React from 'react';
import './App.css';
import FeedInput from './components/FeedInput';
import Mynav from './components/Mynav';
import Posts from './components/Posts';
import SideProfile from './components/SideProfile';

function App() {
  return (
    <>
      <Mynav />
      <SideProfile/>
      <FeedInput/>
      <Posts/>
    </>
  );
}

export default App;
