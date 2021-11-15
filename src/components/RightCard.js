import React from 'react'

const RightCard = () => {
    return (
      <div className=" pt-3 ml-10 w-52 h-44 mt-14 sticky top-16 bg-white  text-sm flex flex-col justify-start rounded-lg ">
        <div className=" text-base px-1 ">Recent</div>
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
    );
}

export default RightCard
