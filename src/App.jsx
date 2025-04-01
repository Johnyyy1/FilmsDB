import { useState, useEffect } from 'react'
import NavbarComponent from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './components/MovieCard';
import './App.css'

const App = () => {
  const [backendData, setBackendData] = useState([]);

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
      <NavbarComponent />
      <div className="container">
        <h1>Movie Database</h1>
        <div className="card-container">
        {backendData.map((element) => (
        <MovieCard
        image={element.img}
        title={element.name} 
        year={element.year_of_publication} 
        key={element.id} 
        />
        ))}
        </div>
      </div>
    </div>
  )
}

export default App