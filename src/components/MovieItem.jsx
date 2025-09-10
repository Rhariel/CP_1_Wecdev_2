const MovieItem = ({ movie, onToggleFavorite, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-semibold">{movie.title}</h3>
      <p className="text-gray-600">Year: {movie.year}</p>
      <p className="text-gray-600">Genre: {movie.genre}</p>
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => onToggleFavorite(movie.id)}
          className={`px-4 py-2 rounded ${movie.isFavorite ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'} hover:opacity-80`}
        >
          {movie.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
        <button
          onClick={() => onDelete(movie.id)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MovieItem;
