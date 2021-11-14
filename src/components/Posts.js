import React from 'react'
import PostCard from './PostCard'

const Posts = () => {
    return (
        <div className='allPosts flex flex-col' >
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </div>
    )
}

export default Posts
