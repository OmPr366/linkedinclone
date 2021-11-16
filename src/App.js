import React from 'react';
import './App.css';
import FeedInput from './components/FeedInput';
import Mynav from './components/Mynav';
import Login from './components/Login';
import RightCard from './components/RightCard';
import SideProfile from './components/SideProfile';
import { selectUser } from './features/userContext';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(selectUser);
  return (
    <>
    {
      !user? (<Login/>) :(
        <>
        <div className="ok ">
        <Mynav />
      </div>
      <div className="pt-1 flex">
        <SideProfile />
        <div className="myDiv">
          <FeedInput />
        
        </div>
        
        <RightCard/>
      </div>
      </>
      )
    }
      
    </>
  );
}

export default App;
