import React from 'react'
import './SideProfile.css'
import cover from '../Assests/cover.jpg'
import BookmarkIcon from "@mui/icons-material/Bookmark";

const SideProfile = () => {
    return (
      <>
        <div className="fixed top-16 card1 flex justify-center flex-col items-center rounded-lg mt-1">
          <div className="coverpic ">
            <img className="coverImg rounded-t-lg" src={cover} alt="" />
          </div>
          <div className="proImage rounded-full">
            <img
              className="coverImg rounded-full"
              src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-picture-intro.jpg"
              alt=""
            />
          </div>
          <h2 className="mt-2">Om Prakash</h2>
          <h3 className="mt-2 mb-3 font-light text-xs text-center mx-2">
            KIIT24 | Full Stack Developer || Competitive Coder || Andriod
            Developer
          </h3>
          <div className="line border-b-2 border-gray-100 w-full"></div>
          <div className="connectionsDetails flex w-full justify-between items-center  px-2 hover:bg-gray-200 cursor-pointer mt-3">
            <div className="deta text-sm text-gray-600">
              connectins <br /> Grow Your Network{" "}
            </div>
            <div className="numbe text-sm ">28</div>
          </div>
          <div className=" mt-1 connectionsDetails flex w-full justify-between items-center text-sm px-2 hover:bg-gray-200 cursor-pointer mb-3">
            <div className="deta text-sm text-gray-600">
              Who viewed profile{" "}
            </div>
            <div className="numbe text-sm ">28</div>
          </div>

          <div className="items flex justify-start w-full items-center px-2 hover:bg-gray-200 cursor-pointer">
            <BookmarkIcon sx={{ fontSize: 20 }} />
            <div className="ml-1 item  ">My Item</div>
          </div>

          {/* <div className=" line border-b-2 border-gray-100 w-full"></div> */}
        </div>

        <div className="mt-8 pt-3 fixed recentCard text-sm flex flex-col justify-start rounded-lg ">
          <div className="title text-base px-1 ">Recent</div>
          <div className="alltags ">
            <div className="tag1 hover:bg-gray-200 pt-1 w-full px-2 cursor-pointer">
              #Javascript
            </div>
            <div className="tag1 hover:bg-gray-200 pt-1 w-full px-2 cursor-pointer">
              #Javascript
            </div>
            <div className="tag1 hover:bg-gray-200 pt-1 w-full px-2 cursor-pointer">
              #Javascript
            </div>
            <div className="tag1 hover:bg-gray-200 pt-1 w-full px-2 cursor-pointer">
              #Javascript
            </div>
            <div className="tag1 hover:bg-gray-200 pt-1 w-full px-2 cursor-pointer">
              #Javascript
            </div>
          </div>
        </div>
      </>
    );
}

export default SideProfile
