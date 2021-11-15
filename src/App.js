import React from 'react';
import './App.css';
import FeedInput from './components/FeedInput';
import Mynav from './components/Mynav';
import Posts from './components/Posts';
import RightCard from './components/RightCard';
import SideProfile from './components/SideProfile';

function App() {
  return (
    <>
      <div className="ok ">
        <Mynav />
      </div>
      <div className="pt-1 flex">
        <SideProfile />
        <div className="myDiv">
          <FeedInput />
        <Posts />
        </div>
        
        <RightCard/>
      </div>
    </>
  );
}

export default App;
