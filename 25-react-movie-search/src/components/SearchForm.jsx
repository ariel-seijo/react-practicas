function SearchForm({ search, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="form">
      <input
        className="input"
        value={search}
        placeholder="batman, avengers, etc"
        onChange={onChange}
      />
      <button className="button" type="submit">
        Buscar
      </button>
    </form>
  );
}

export default SearchForm;