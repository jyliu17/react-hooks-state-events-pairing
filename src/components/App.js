import video from "../data/video.js";
import CommentList from "./CommentList"
import VideoDetail from "./VideoDetail"
 
function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
     
      <VideoDetail 
        title={video.title} 
        views={video.views} 
        createdAt= {video.createdAt}
        upvotes={video.upvotes}
        downvotes={video.downvotes}
        />
        
    </div>
  );
}

export default App;