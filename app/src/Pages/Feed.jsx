import React, { useEffect, useState } from "react";

const Feed = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=latest&type=video&key=AIzaSyAPE6Ml6dv1pU-Pj-JImF9lzNVnQk85ttc`
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
      <style>{`
        .feed-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          padding: 24px;
          background-color: white;
          
        }
        .video-card {
      
          background-color: #181818;
          border-radius: 8px;
          overflow: hidden;
          color: #fff;
          transition: transform 0.2s ease;
          cursor: pointer;
          
        }
        .video-card:hover {
          transform: scale(1.03);
        }
        .thumbnail {
          width: 100%;
          height: auto;
          display: block;
        
        }
        .video-info {
          padding: 12px;
        }
        .video-title {
          font-size: 14px;
          font-weight: 600;
          margin: 0;
          line-height: 1.4;
          max-height: 2.8em;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .channel-title {
          font-size: 12px;
          color: #aaa;
          margin-top: 4px;
        }

        @media (max-width: 900px) {
          .feed-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .feed-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="feed-container">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-card">
            <img
              src={video.snippet.thumbnails.medium.url}
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
