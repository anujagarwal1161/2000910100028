import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { response } from 'express';
import { Link } from 'react-router-dom';

function Train() {
    const [trainSchedule, setTrainSchedule] = useState([]);
    useEffect(() => {
        const url = 'http://20.244.56.144:80/train/trains';
        const api = axios.create({
            baseURL: url
        });
        api.interceptors.request.use((config) => {
            const accessToken = localStorage.getItem('accessToken');
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            return config;
        })
        axios.get(url).then(response => setTrainSchedule(response.data.trains))
            .catch(error => {
                console.error('error fetching data', error);
                setTrainSchedule([]);
            });
    }, []);
   
    return (
        <div className='container'>
            <header>
                <h1>Train Schedule</h1>
            </header>
            <ul>
                {
                    trainSchedule.map((train) => (
                        <li key={train.id}>
                            <Link to={`/train/${2431}`} className='train-link'>
                                <div className='train-name'>{"Chennai Express"}</div>
                                <div className='train-name'>Departure Time: {7}</div>

                            </Link>
                        </li>
                    ))
                }
            </ul>
          {/* In this component we will display all trains */}
          
    </div>
  )
}

export default Train
