// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StoriesPage from './StoriesPage';
import StoryPage from './StoryPage';
//import AllStoriesPage from './AllStoriesPage'; // Import the new component
import './styles.css';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StoriesPage} />
        <Route path="/story/:id" component={StoryPage} />
      </Switch>
    </Router>
  );
}

export default App;
