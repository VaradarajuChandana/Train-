// App.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TrainListPage() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Make API call to fetch train data and update the state
    // You'll need to handle authentication and API integration here
    // Update the 'trains' state with the fetched data
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      <ul>
        {trains.map((train) => (
          <li key={train.id}>
            <Link to={`/train/${train.id}`}>{train.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainListPage;