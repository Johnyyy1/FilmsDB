import React from 'react';
import { Card } from 'react-bootstrap';
import './MovieCard.css';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ title, year, image, id }) => {

  const navigate = useNavigate();

  return (
    <Card className="movie-card">
      <img src={image} alt={title} />
      <Card.Body>
        <h5 id='title'>{title}</h5>
        <p id='year'>{year}</p>
        <button className='btn btn-primary' id={id} onClick={() => {
          navigate(`/movie/${id}`)
        }}>Check it out</button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;