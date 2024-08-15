// Nav.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Ensure axios is imported correctly
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import CardComponent from './CardComponent'; // Ensure the correct path to CardComponent
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get("http://api.themoviedb.org/3/trending/movie/week?api_key=9fcf7a3dcf6947a420682da4c7f85220")
      .then(response => {
        // Check the structure of the response and set the state accordingly
        if (response.data && response.data.results) {
          setState(response.data.results);
        }
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <>
      <header className="header">
        <h1 className="title">Movies App</h1>
        <FontAwesomeIcon icon={faUser} className="icon" />
      </header>

      <h1 className='mb-4'>Movies</h1>
      <div className="container">
        <div className="row">
          {state.map((card, index) => (
            <div key={index} className="col-lg-3 col-md-5 col-sm-6 mb-4 card-container">
              <CardComponent
                title={card.title}
                text={card.release_date}
                imageUrl={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nav;
