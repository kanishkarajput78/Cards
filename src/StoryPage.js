

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Tabs from './Tabs';

function StoryPage() {
  const { id } = useParams();
  const [story, setStory] = useState(null);

  useEffect(() => {
    fetch(`https://child.onrender.com/api/sciencefiction/${id}`)
      .then(response => response.json())
      .then(data => setStory(data));
  }, [id]);

  if (!story) {
    return <div>Loading...</div>;
  }


  const tags = story.Tags ? story.Tags.join(', ') : '';

  const tabs = [
    { title: 'Summary', content: <p>{story.Summary}</p> },
    { title: 'Author', content: <p>{story.Author}</p> },
    { title: 'Tags', content: <p>{tags}</p> }
  ];

  return (
    <div className="container">
      <h1>{story.Title}</h1>
      <Tabs tabs={tabs} />
    </div>
  );
}

export default StoryPage;
