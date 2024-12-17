import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './YouTube.css';

const YouTube = () => {
  const [videos, setVideos] = useState([]);
  const YOUTUBE_API_KEY = 'AIzaSyBoug8ZWfzix0AGPfmOcekRuNrvE2hB4eA'; // Replace with your actual API key
  const CHANNEL_ID = 'UCrSguKJUcg5LgK5q_MEs3iA'; // Replace with your actual channel ID (should start with UC...)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="youtube-container">
      <h1 className="youtube-title">My YouTube Videos</h1>
      <div className="videos-grid">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-card">
            <div className="thumbnail-container">
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="video-thumbnail"
              />
              <div className="play-button">▶</div>
            </div>
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description.substring(0, 100)}...</p>
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="watch-button"
            >
              Watch Video
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTube;
