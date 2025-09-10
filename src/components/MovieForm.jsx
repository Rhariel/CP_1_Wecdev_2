import { useState } from 'react';

const MovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && year && genre) {
      onAddMovie({ title, year, genre, id: Date.now(), isFavorite: false });
      setTitle('');
      setYear('');
      setGenre('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Adicionar Novo Filme</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Título do Filme"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Ano de Lançamento"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Gênero"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Adicionar Filme
      </button>
    </form>
  );
};

export default MovieForm;
