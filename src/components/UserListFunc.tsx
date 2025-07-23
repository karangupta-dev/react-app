import { useState, useTransition } from "react";

export function UserListFunc() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const fetchUsers = () => {
    setLoading(true);
    setError(null);

    startTransition(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          if (!res.ok) throw new Error("Network response not ok");
          return res.json();
        })
        .then((data) => {
          setUsers(data);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  };

  return (
    <div>
      <button onClick={fetchUsers} disabled={loading || isPending}>
        {loading || isPending ? "Loading..." : "Load Users"}
      </button>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
