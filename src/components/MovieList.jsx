import MovieItem from './MovieItem';

const MovieList = ({ movies, onToggleFavorite, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onToggleFavorite={onToggleFavorite}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default MovieList;
