import React from 'react'
import { useParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard'

const Movie = () => {
    const { id } = useParams();

    // useEffect(() => {
    //     fetch(`http://localhost:5000/api/${id}`)  
    //       .then(response => {
    //         if (!response.ok) {
    //           throw new Error("Chyba při načítání dat");
    //         }
    //         return response.json();
    //       })
    //       .then(data => {
    //         setBackendData(data.films);
    //       })
    //       .catch(error => {
    //         console.error("Chyba při získávání dat:", error);
    //       });
    //   }, []);
    
  return (
    <>
     <MovieCard 
     id = {id}

    />
    <h1></h1>
    </>
  )
}

export default Movie