import React from 'react'
import './Mynav.css'
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkIcon from "@mui/icons-material/Work";
import InsertCommentRoundedIcon from "@mui/icons-material/InsertCommentRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import { blue } from "@mui/material/colors";
import Bar from './Bar';

const Mynav = () => {
    return (
      <div className="myNav fixed top-0 left-0  py-1 w-screen flex justify-center items-center h-14  ">
        <div className="centerMain flex justify-between  items-center ">
          <div className="search flex items-center">
            <div className="icon flex items-center">
              <LinkedInIcon sx={{ color: blue[600], fontSize: 40 }} />
            </div>
            <div className="input bg-gray-50 px-1 flex items-center">
              <div className="searchIcon">
                <SearchIcon color="action" />
              </div>

              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Search"
                className="bg-gray-50 px-2 py-1 ml-1 pl-8 rounded-3xl"
              ></input>
            </div>
          </div>

          <div className="allicon flex items-center">
            <Bar 
              Icon={HomeIcon} 
              name="Home" 
              active="1" 
              main="0" 
            />
            <Bar Icon={PeopleAltIcon} name="My Network" active="0" main="0" />
            <Bar Icon={WorkIcon} name="Jobs" active="0" main="0" />
            <Bar
              Icon={InsertCommentRoundedIcon}
              name="Messages"
              active="0"
              main="0"
            />
            <Bar
              Icon={NotificationsNoneRoundedIcon}
              name="Notifications"
              active="0"
              main="0"
            />
            <Bar Icon={AccountCircleIcon} name="Me" active="0" main="1" />
            <div className="Line border-l-2  border-gray-200 h-14"></div>
            <Bar Icon={AppsIcon} name="Work" active="0" main="1" />
            <div className="tryPremium w-24 text-sm text-center font-light">
              <a href="">Try Premium for free</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Mynav;
