// AllStoriesPage.js

import React, { useState, useEffect } from 'react';

function AllStoriesPage() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('https://child.onrender.com/api/sciencefiction')
      .then(response => response.json())
      .then(data => setStories(data));
  }, []);

  return (
    <div className="container">
      <h1>All Stories</h1>
      <div className="stories">
        {stories.map(story => (
          <div key={story.id} className="story">
            <h2>{story.Title}</h2>
            <p>{story.Description}</p>
            {/* Add more details if needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllStoriesPage;
