import React, { useState } from "react";
import { renderIntoDocument } from "react-dom/cjs/react-dom-test-utils.production.min";
import CommentList from "./CommentList";
import video from "../data/video.js";

function VideoDetail({title, views, createdAt, upvotes, downvotes, comments}) {

const [likes, setLikes] = useState(upvotes)
const [dislikes, setDisLikes] = useState(downvotes)
const [hideComments, setHiddenComments] = useState(false)

function handleLikes(){
    const newLikes = likes + 1;
    setLikes(newLikes)
}
function handleDisLikes(){
    const newDisLikes = dislikes + 1;
    setDisLikes(newDisLikes)
}

function handleHidden(event){
    if(hideComments){
        event.target.textContent = "Hide Comments"
    } else {
        event.target.textContent = "Show Comments"
    }
    
    setHiddenComments(!hideComments)

}
    return(
        <div id="videoDetail">
            <h1>{title}</h1> 
            <p> {views} Views | Uploaded {createdAt}</p>
            <div>
                <button onClick={handleLikes}> {likes} 👍</button>
                <button onClick={handleDisLikes}> {dislikes} 👎</button> 
                <br></br><br></br>
                <button onClick={handleHidden}> Hide Comments</button>
            </div>
            {hideComments ? null : <CommentList comments={video.comments}/> }
        </div>

    );
}




export default VideoDetail;