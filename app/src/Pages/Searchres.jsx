import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchApi } from "../Api/SearchApi";

const Searchres = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    if (query) {
      const getData = async () => {
        const results = await SearchApi(query);
        setVideos(results);
      };
      getData();
    }
  }, [query]);

  return (
    <>
      <style>{`
        .search-container {
          padding: 16px;
          background-color: #0f0f0f;
          color: white;
        }

        .search-heading {
          font-size: 24px;
          margin-bottom: 16px;
        }

        .searchgrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .video-card {
          border: 1px solid #333;
          border-radius: 8px;
          padding: 12px;
          background-color: #181818;
          transition: transform 0.2s ease;
          cursor: pointer;
        }

        .video-card:hover {
          transform: scale(1.03);
        }

        .video-thumbnail {
          width: 100%;
          height: auto;
          border-radius: 4px;
        }

        .video-title {
          margin-top: 8px;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
        }

        @media (max-width: 900px) {
          .searchgrid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .searchgrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="search-container">
        <h2 className="search-heading">Results for "{query}"</h2>
        <div className="searchgrid">
          {videos.map((video) => (
            <div key={video.id.videoId} className="video-card">
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="video-thumbnail"
              />
              <h3 className="video-title">{video.snippet.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Searchres;
