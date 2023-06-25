
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function TrainDetailsPage() {
  const { id } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    // Make API call to fetch train details using the 'id' parameter
    // You'll need to handle authentication and API integration here
    // Update the 'train' state with the fetched data
    axios.post('http://104.211.219.98/train/register',{
      companyName:"train central",
      ownerName:"Varadaraju Chandana Priya",
      rollNo:"20BF1A3361",
      accessscode:"jOBrNa",
      ownerEmail:"vchandana1802@gmail.com"
        }
        
  }, [id]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Train Details</h1>
      <h2>{train.name}</h2>
      <p>Seats Available: {train.seatsAvailable}</p>
      <p>Price (Sleeper): {train.priceSleeper}</p>
      <p>Price (AC): {train.priceAC}</p>
    </div>
  );
}

export default TrainDetailsPage;