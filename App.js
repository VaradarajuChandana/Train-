import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TrainListPage from './TrainListPage';
import TrainDetailsPage from './TrainDetailsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={TrainListPage} />
        <Route path="/train/:id" component={TrainDetailsPage} />
      </div>
    </Router>
  );
}

export default App;