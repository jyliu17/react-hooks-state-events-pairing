import React, { useState } from "react";

function Comment(props) {
    return (
        <div id="comment">
            <h2>{props.user}</h2>
            <p>{props.comment}</p>
        </div>
    );    

    
}


export default Comment;