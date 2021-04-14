import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../api/YouTube";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onSearchTermSubmit("Buildings");
  }, []);

  const onSearchTermSubmit = async (term) => {
    const response = await youtube.get("/search", { params: { q: term } });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onSearchTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              onVideoSelect={(video) => setSelectedVideo(video)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
