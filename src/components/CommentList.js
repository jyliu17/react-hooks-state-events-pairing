import React, { useState } from "react";
import Comment from "./Comment";

function CommentList({comments}){

    const commentsArray = comments.map((comment) => {
        
       
        return(
            <Comment 
            user={comment.user}
            comment={comment.comment}
            />
        );
    });

    return (
        <main>{commentsArray}</main> 
    );
} 





export default CommentList;