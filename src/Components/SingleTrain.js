import axios from 'axios';
import { response } from 'express';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function SingleTrain({match}) {
    const { id } = match.params;
    const [selectedTrain, setSelectedTrain] = useState(null);
    useEffect(() => {
        axios.get(`http://20.244.56.144:80/train/trains`).then(response => {
            const train = response.data.trains.find((t) => t.id.toString() === id);
            if (train) {
                setSelectedTrain(train);
            }
        })
            .catch(error => {
                console.error('error fetching data', error);
                setSelectedTrain(null);
            });
    }, [id]);
    if (!selectedTrain) {
        return <div className='container'>Train not found</div>
    }
  return (
    <div className='container'>
          <header>
              <h1>{ selectedTrain.name}</h1>
          </header>
          <div className='train-details'>
              <p>Departure Time: {selectedTrain.departureTime}</p>
              <p>Destination: {selectedTrain.destination}</p>
              <Link to="/" className='back-link'>
                  Back to all trains
              </Link>
          </div>
    </div>
  )
}

export default SingleTrain
