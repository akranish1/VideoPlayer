import React, { useEffect, useState } from "react";
import { useSidebar } from '../context/SidebarContext';
import './css/Feed.css';

const Feed = () => {
  const { isSidebarOpen } = useSidebar();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=latest&type=video&key=AIzaSyDZTwHv5cxbv8T3KXh5l80nPLzFFAhi7rg`
        );
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <>
      <div className={`feed-container ${isSidebarOpen ? 'shifted' : ''}`}>
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-card">
            <img
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
              className="thumbnail"
            />
            
            <div className="video-info">
              <h3 className="video-title">{video.snippet.title}</h3>
              <p className="channel-title">{video.snippet.channelTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Feed;
