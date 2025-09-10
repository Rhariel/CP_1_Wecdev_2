import { useState } from 'react';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const toggleFavorite = (id) => {
    setMovies(movies.map(movie =>
      movie.id === id ? { ...movie, isFavorite: !movie.isFavorite } : movie
    ));
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Movie List App</h1>
      <MovieForm onAddMovie={addMovie} />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <MovieList
        movies={filteredMovies}
        onToggleFavorite={toggleFavorite}
        onDelete={deleteMovie}
      />
    </div>
  );
}

export default App;
