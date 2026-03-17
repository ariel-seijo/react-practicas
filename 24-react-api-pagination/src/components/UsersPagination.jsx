import { useState, useEffect } from "react";

function UsersPagination() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const limit = 6;

  useEffect(() => {
    const skip = (page - 1) * limit;

    setLoading(true);
    setError(null);

    fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar los usuarios");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data.users);
        setTotalPages(Math.ceil(data.total / limit));
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [page]);

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  if (error) {
    return <h2>Error al cargar los usuarios</h2>;
  }

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} - {user.email}
          </li>
        ))}
      </ul>

      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Anterior
      </button>

      <span>
        {" "}
        Página {page} de {totalPages}{" "}
      </span>

      <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
        Siguiente
      </button>
    </>
  );
}

export default UsersPagination;
