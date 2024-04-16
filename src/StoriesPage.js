

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function StoriesPage() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('https://child.onrender.com/api/sciencefiction')
      .then(response => response.json())
      .then(data => setStories(data));
  }, []);

  return (
    <div className="container">
      {stories.map(story => (
        <Link to={`/story/${story.id}`} key={story.id}>
          <div className="card">
            <img src={`https://ik.imagekit.io/dev24/${story.Image}`} alt={story.Title} />
            <h2>{story.Title}</h2>
            <p>{story.Description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default StoriesPage;
