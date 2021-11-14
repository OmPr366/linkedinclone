import React from 'react'
import './Feed.css'
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import TodayIcon from "@mui/icons-material/Today";
import ArticleIcon from "@mui/icons-material/Article";

const FeedInput = () => {
    return (
      <>
        <div className="inputFeed bg-white rounded-xl px-4 py-2 mt-1 ">
          <div className="inputSec flex justify-around">
            <div className="inputImageIcon rounded-full">
              <img
                className=" rounded-full"
                src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-picture-intro.jpg"
                alt=""
              />
            </div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Start a post"
              className=" postInput rounded-3xl"
            />
          </div>

          {/* Adding extra Section */}
          <div className="selSec flex p-2 w-full ">
            <div className="imageSec flex w-full justify-between">
              <div className="logoSec flex">
                <ImageIcon className="imageLogo" />
                <div className="Text ml-2">Image</div>
              </div>

              <div className="logoSec flex">
                <VideocamIcon className="videoLogo" />
                <div className="Text ml-2">Video</div>
              </div>

              <div className="logoSec flex">
                <TodayIcon className="eventLogo" />
                <div className="Text ml-2">Event</div>
              </div>

              <div className="logoSec flex">
                <ArticleIcon className="articleLogo" />
                <div className="Text ml-2">Write Article</div>
              </div>
            </div>
          </div>
        </div>
        <hr className='bg-black afterInputLine' />
      </>
    );
}

export default FeedInput
