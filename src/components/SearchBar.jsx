const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default SearchBar;
