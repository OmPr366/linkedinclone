import React, { useState, useEffect } from 'react'
import './Feed.css'
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import TodayIcon from "@mui/icons-material/Today";
import ArticleIcon from "@mui/icons-material/Article";

import firebase from 'firebase';
import { db } from '../Firebase';
import PostCard from './PostCard';

const FeedInput = () => {
    const [postData, setPostData] = useState("")
    const [posted, setPosed] = useState(0);
    const [postArray, setPostArray] = useState([]);
    const submitPost= (e)=>{
      e.preventDefault();
      
      // e.preventDefault();
      // alert(postData);
      db.collection("posts").add({
        name :"Satya Prakash",
        desc :"MicroSoft || India",
        message: postData,
        photoUrl : "https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-picture-intro.jpg",
        timeStamp : firebase.firestore.FieldValue.serverTimestamp()
      });
      setPostData("");
      setPosed(1);
      setInterval(() => {
        setPosed(0);
      }, 2000);
      
    }

    useEffect(() => {
      db.collection("posts").orderBy("timeStamp","desc").onSnapshot(snapshot=>{
        setPostArray(snapshot.docs.map(doc=>({
          id : doc.id,
          data : doc.data()
        })))
      });
      
    },[])
    console.log(postArray);
    return (
      <>
        <div className="inputFeed bg-white rounded-xl px-4 py-2 mt-16  ">
          <div className="inputSec flex justify-around">
            <div className="inputImageIcon rounded-full">
              <img
                className=" rounded-full"
                src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-picture-intro.jpg"
                alt=""
              />
            </div>
            <form onSubmit={submitPost} className="postForm p-0">
              <input
                type="text"
                name=""
                id=""
                value={postData}
                placeholder="Start a post"
                className="postInput w-full rounded-3xl"
                onChange={(e) => setPostData(e.target.value)}
              />
            </form>
          </div>

          {/* Adding extra Section */}
          <div className="selSec flex p-2 w-full mt-2 ">
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
        <hr className="bg-black afterInputLine " />
        {/* <div > Posting.... <div/> */}
        <div
          className={`${
            posted == 1
              ? "bg-gray-300 posted w-9 mt-4 mb-4 h-11 rounded-md"
              : ""
          }  `}
        >
          {posted == 1 ? "Posting...." : ""}
        </div>
        <div className="allPosts flex flex-col">
          {postArray.map((element) => {
            return (
              <PostCard
                photoUrl={element.data.photoUrl}
                name={element.data.name}
                about={element.data.desc}
                message={element.data.message}
              />
            );
          })}
        </div>

        {/* <Posts postArray={postArray} /> */}
      </>
    );
}

export default FeedInput
