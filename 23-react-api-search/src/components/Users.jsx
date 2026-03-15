import { useEffect, useState } from "react";

function Users() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (!search) {
      return;
    }
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users?name=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [search]);

  if (loading) {
    return <h2>Cargando los datos...</h2>;
  }

  if (error) {
    return <h2>Error al cargar los datos...</h2>;
  }

  return (
    <>
      <input value={search} onChange={handleSearch}></input>
      <ul>
        {users.map((usuario) => (
          <li key={usuario.id}>{usuario.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Users;
