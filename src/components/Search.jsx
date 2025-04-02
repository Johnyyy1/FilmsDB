import { useState } from "react";
import { Form, FormControl } from 'react-bootstrap';
import './Search.css'
function Search({ data, onSearch }) {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);


  const filteredMovies = (data || []).filter((movie) =>
    movie.name.toLowerCase().includes(query.toLowerCase()) 
  );

  return (
    <div>
      <Form className="search-form">
        <FormControl
          type="text"
          placeholder="Hledat film..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onSearch(e.target.value);
            setShowSuggestions(true);
          }}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        />
        <button className="btn btn-outline-light" type="submit" id="searchBtn">Search</button>
      </Form>
      {showSuggestions && query && (
        <ul>
          {filteredMovies.map((movie) => (
            <li key={movie.id} onClick={() => { 
              setQuery(movie.name);  
              onSearch(movie.name);
              setShowSuggestions(false); 
              console.log("Suggesting")
            }}>
              <p>{movie.name} </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
