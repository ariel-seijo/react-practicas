import "./App.css";
import Card from "./components/Card";

function App() {
  const movies = [
    { id: 1, title: "Madagascar", price: 200 },
    { id: 2, title: "Ice Age", price: 180 },
    { id: 3, title: "Time Machine (2008)", price: 145 },
  ];

  return (
    <>
      <h2>Lista de Películas</h2>
      {movies.map((movies) => (
        <Card key={movies.id} title={movies.title} price={movies.price} />
      ))}
    </>
  );
}

export default App;
