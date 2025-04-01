import React from 'react';
import { Card } from 'react-bootstrap';
import './MovieCard.css';

const MovieCard = ({ title, year, image }) => {
  return (
    <Card className="movie-card">
      <img src={image} alt={title} />
      <Card.Body>
        <h5 id='title'>{title}</h5>
        <p id='year'>{year}</p>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;