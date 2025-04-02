import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './components/MovieCard';
import Favorites from './Partials/Favorites';
import Account from './Partials/Account';
import Movie from './Partials/Movie';
import './App.css'
import Home from './Partials/Home';

const App = () => {
  const [backendData, setBackendData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api")  
      .then(response => {
        if (!response.ok) {
          throw new Error("Chyba při načítání dat");
        }
        return response.json();
      })
      .then(data => {
        setBackendData(data.films);
      })
      .catch(error => {
        console.error("Chyba při získávání dat:", error);
      });
  }, []);
  
  

  return (
    <div className="app-container">
      <NavbarComponent data={backendData} onSearch={setQuery} />
      <Routes>
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/account" element={<Account />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="*" element={<Home />} />

      </Routes>
      <div className="container">
        <h1>Movie Database</h1>
        <div className="card-container">
  {backendData && backendData.length > 0 ? (
    backendData.map((element) => (
      <MovieCard
        image={element.img}
        title={element.name}
        year={element.year_of_publication}
        id={element.id}
        key={element.id}
      />
    ))
          ) : (
            <p>No movies available.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default App