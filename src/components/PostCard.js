import React from 'react'
import PublicIcon from "@mui/icons-material/Public";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

const PostCard = () => {
    return (
      <div className="postCard pt-2 mb-2 bg-white rounded-lg">
        <div className="titleOfCard   flex justify-between px-3 ">
          <div className="mainPostCard flex">
            <div className="inputImageIcon rounded-full">
              <img
                className=" rounded-full"
                src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-picture-intro.jpg"
                alt=""
              />
            </div>
            <div className="postCardTitle ml-2 text-xs">
              <div className="name font-bold">Om Prakash </div>
              <div className="about font-light">
                Web Devloper at Google , India{" "}
              </div>
              <div className="time flex font-light items-center ">
                <font className="mr-1 -mt-1">1hr</font>{" "}
                <PublicIcon sx={{ fontSize: 15 }} />
              </div>
            </div>
          </div>
          <div className="optionPostCard  justify-end ">
            {" "}
            <MoreVertIcon />{" "}
          </div>
        </div>

        <div className="lineLike  "></div>
        <div className="optionsLike w-full px-3 mt-3">
          <button className="hover:bg-gray-200 w-1/4 py-2 rounded-sm ">
            {" "}
            <ThumbUpAltOutlinedIcon />
             Like
          </button>
          <button className="hover:bg-gray-200 w-1/4 py-2 rounded-sm ">
            <ModeCommentOutlinedIcon />
            Comment
          </button>
          <button className="hover:bg-gray-200 w-1/4 py-2 rounded-sm ">
            <ShareIcon />
            Share
          </button>
          <button className="hover:bg-gray-200 w-1/4 py-2 rounded-sm ">
            <SendIcon />
            Send
          </button>
        </div>
      </div>
    );
}

export default PostCard
